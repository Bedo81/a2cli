/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TripsComponent } from './trips.component';
import { DataService } from '../shared/services/data.service';

let trips = [
  {
    "id": "1",
    "country": "BnnVietnam",
    "description": "fdbdf dsvdfb",
    "dates": [
      {
        "start": "2017-02-21T13:28:06.419Z",
        "end": "2017-03-08T13:28:06.419Z"
      },
      {
        "start": "2017-02-23T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      },
      {
        "start": "2017-03-03T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      }
    ]
  },
  {
    "id": "2",
    "country": "BnmAustria",
    "description": "RRRR Ausrt",
    "dates": [
      {
        "start": "2017-02-15T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      },
      {
        "start": "2017-02-16T13:28:06.419Z",
        "end": "2017-03-08T13:28:06.419Z"
      },
      {
        "start": "2017-03-01T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      }
    ]
  },
  {
    "id": "3",
    "country": "BnxxxSlovakia",
    "description": "bgfnfgn",
    "dates": [
      {
        "start": "2017-02-21T13:28:06.419Z",
        "end": "2017-03-08T13:28:06.419Z"
      },
      {
        "start": "2017-02-23T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      },
      {
        "start": "2017-03-03T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      }
    ]
  },
  {
    "id": "4",
    "country": "BThailand",
    "description": "jvusvst vscvsvool",
    "dates": [
      {
        "start": "2017-02-21T13:28:06.419Z",
        "end": "2017-03-08T13:28:06.419Z"
      },
      {
        "start": "2017-02-23T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      },
      {
        "start": "2017-03-03T13:28:06.419Z",
        "end": "2017-03-15T13:28:06.419Z"
      }
    ]
  },
  {
    "id": "5",
    "country": "Xxxx",
    "description": "DDDDD"
  }
]

class DataServiceMock {
  
  getTrips() {
    return Observable.of(...trips);
  }
}

describe('TripsComponent', () => {
  let component: TripsComponent;
  let fixture: ComponentFixture<TripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsComponent ],
      providers: [ {provide: DataService, useClass: DataServiceMock} ]
    })
    .overrideComponent(TripsComponent, {
      set: {template: '<div></div>'}
    })    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
