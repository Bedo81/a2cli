import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TripsComponent } from './trips/trips.component';

import { DataService } from './shared/services/data.service';
import { SearchComponent } from './trips/search/search.component';

const appRoutes: Routes = [
  { path: 'home', component: MyNewComponentComponent },
  { path: 'trips',      component: TripsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    TripsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
