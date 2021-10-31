import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { SpotifyService } from './../services/spotify.service';
import { DetailsObject } from './../details.interface';

@Component({
  selector: 'track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: string = '';
  track: DetailsObject = {};

  constructor(private route: ActivatedRoute, 
              private spotify: SpotifyService,
              private location: Location) { 
    this.subscription = route.params.subscribe(params => { 
      this.id = params['id']; 
    });
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
