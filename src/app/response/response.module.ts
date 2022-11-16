export interface SearchResponse {
  _type:      string;
  totalCount: number;
  value:      Value[];
}

export interface Value {
  url:               string;
  height:            number;
  width:             number;
  thumbnail:         string;
  thumbnailHeight:   number;
  thumbnailWidth:    number;
  base64Encoding:    null;
  name:              string;
  title:             string;
  provider:          Provider;
  imageWebSearchUrl: string;
  webpageUrl:        string;
}

export interface Provider {
  name:                  string;
  favIcon:               string;
  favIconBase64Encoding: string;
}

export interface Image {
  title:                  string;
  url:               string;
}
