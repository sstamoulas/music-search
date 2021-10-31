import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { 
  LocationStrategy, 
  HashLocationStrategy, 
  APP_BASE_HREF 
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

import { SpotifyService } from './services/spotify.service';
import { AuthService } from './services/auth.service';

import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'protected', 
    component: ProtectedComponent, 
    canActivate: [ LoggedInGuard] 
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'albums/:id', component: AlbumComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LoggedInGuard, useClass: LoggedInGuard },
    { provide: AuthService, useClass: AuthService },
    { provide: SpotifyService, useClass: SpotifyService },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
