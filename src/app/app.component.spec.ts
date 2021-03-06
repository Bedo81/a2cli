/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';
import {TripsComponent} from './trips/trips.component';
import {SearchBoxComponent} from './trips/search-box.component';

import {MomentModule} from 'angular2-moment';

import {DatepickerModule} from 'ng2-bootstrap/datepicker';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
             declarations: [
               AppComponent,
               MyNewComponentComponent,
               TripsComponent,
               SearchBoxComponent
             ],
             imports: [
               DatepickerModule,
               FormsModule,
               MomentModule
             ]
           })
           .overrideComponent(AppComponent, {
             set: {template: '<h1>{{title}}</h1>'}
           })
           .compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
