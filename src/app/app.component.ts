import {Component, ElementRef, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { WebSearchService } from './web-search.service';
import {
  catchError,
  debounceTime, delay,
  distinctUntilChanged,
  filter,
  take,
  map,
  retryWhen,
  switchMap,
  tap,
  throttleTime, takeWhile
} from 'rxjs/operators';
import {Image, SearchResponse, Value} from './response/response.module';
import {BehaviorSubject, fromEvent, merge, of, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly element: HTMLElement;
  public search: FormControl =  new FormControl('');
  private searchEvents$: Observable<any>;
  private scrollEvents$: Observable<boolean>;
  private spaceNotFilled$: Subject<any> = new Subject<any>();
  private sendedSearch$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private sendedPageSize$: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  public results$: Observable<Image[]>;
  public openModalClicks$: Observable<boolean>;
  public modalImage: Image;

  constructor(
    private webSearch: WebSearchService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;

    this.searchEvents$ = this.search.valueChanges.pipe(
      map((search: string) => search.trim()),
      debounceTime(1100),
      distinctUntilChanged(),
      filter((search: string) => search !== ''),
      tap((search: string) => this.sendedSearch$.next(search)),
      tap(() => this.sendedPageSize$.next(10) )
    );

    this.scrollEvents$ = merge(
      this.spaceNotFilled$.pipe(
        delay(500),
        takeWhile(() => document.querySelector('.box').clientHeight < window.innerHeight)
      ),
      fromEvent(window, 'scroll').pipe(
        filter(() => (window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight * 0.99) )
      )
    ).pipe(
        debounceTime(1500),
        takeWhile(() => this.sendedPageSize$.value < 50),
        tap(() => this.sendedPageSize$.next(this.sendedPageSize$.value + 10)
      )
    );

    this.results$ = merge(this.searchEvents$, this.scrollEvents$).pipe(
      filter(() => this.sendedSearch$.value !== ''),
      throttleTime(1500),
      switchMap(() => webSearch.search(this.sendedSearch$.value, this.sendedPageSize$.value).pipe(
        retryWhen((errors: Observable<any>) => errors.pipe(
          delay(1100),
          takeWhile(error => {
            if (error.error.message.includes('You have exceeded the DAILY quota for requests on your current plan')) {
              alert('Daily quota for API requests is exceeded! Try again later!');
              return false;
            } else {
              return true;
            }
          }),
          take(3)
        )),
        catchError((error: any) => {
          console.log(error.error.message || error);
          return of(null);
        }),
        filter((value: SearchResponse | null) => value !== null),
        map((response: SearchResponse) => response.value),
        map((value: Value[]) => value.map( val => ({ title: val.title, url: val.url }) )),
        tap(() => this.spaceNotFilled$.next())
      ))
    );

    this.openModalClicks$ = fromEvent(this.element, 'click').pipe(
      map((event: Event) => event.target),
      filter((target: HTMLElement) => target.className === 'img'),
      tap((img: HTMLElement) =>
        this.modalImage = {
          title: img.getAttribute('alt'), url: img.getAttribute('src')
        }
      ),
      map(() => true)
    );
  }
}
