import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable()
export class SpotifyService {
  static BASE_URL = "https://api.spotify.com/v1";
  
  constructor(public http: HttpClient) { }

  query(URL: string, params?: Array<string>): Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    const apiKey = environment.spotifyApiKey;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`
    });
    const options = {
      headers: headers
    };

    return this.http.request("GET", queryURL, options);
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any> {
    return this.search(query, "track");
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService }
];
