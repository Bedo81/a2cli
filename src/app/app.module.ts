import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TripsComponent } from './trips/trips.component';

const appRoutes: Routes = [
  { path: 'home', component: MyNewComponentComponent },
  { path: 'trips',      component: TripsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
