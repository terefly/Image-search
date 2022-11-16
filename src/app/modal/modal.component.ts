import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Image } from '../response/response.module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() openClicks$: Observable<boolean>;
  private readonly closeClicks$: Observable<boolean>;
  public modalState$: Observable<boolean>;

  private readonly element: HTMLElement;
  public modalImage: Image;

  constructor(
    private el: ElementRef
  ) {
    this.element = el.nativeElement;

    this.closeClicks$ = fromEvent(this.element, 'click').pipe(
      map((event: Event) => event.target),
      filter((target: HTMLElement) => target.className === 'modal' || target.className === 'modal_close-btn'),
      map(() => false)
    );
  }
  ngOnInit(): void {
    document.body.appendChild(this.element);

    this.modalState$ = merge(this.openClicks$, this.closeClicks$);
  }
}


