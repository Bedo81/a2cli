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
import { SearchBoxComponent } from './trips/search-box.component';

import { DatepickerModule } from 'ng2-bootstrap/datepicker';

const appRoutes: Routes = [
  { path: 'home', component: MyNewComponentComponent },
  { path: 'trips',      component: TripsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    TripsComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    DatepickerModule.forRoot(),
    FormsModule,
    HttpModule,
    MomentModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
