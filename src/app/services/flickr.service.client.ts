import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class FlickrService {
  key = 'e2d94f3a46602f6e79f15e6a43739d70';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';


  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }

}
