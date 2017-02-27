/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Rx';

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

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: DataService, useClass: DataServiceMock}]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
