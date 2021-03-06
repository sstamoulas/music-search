import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from './../services/spotify.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Array<any> | null;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.query = '';
    this.results = null;
    
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit(): void {
    this.search();
  }

  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query }})
      .then(_ => this.search());
  }

  search(): void {
    if(!this.query) {
      return;
    }

    this.spotify
      .searchTrack(this.query)
      .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if(res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}
