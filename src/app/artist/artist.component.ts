import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from './../services/spotify.service';
import { DetailsObject } from './../details.interface';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string = '';
  artist: DetailsObject = {};

  constructor(private route: ActivatedRoute, 
              private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}
