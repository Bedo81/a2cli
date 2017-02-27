import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';

import {Trip} from '../shared/models/trip';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  public trips: Trip[];
  
  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.getTrips();
  }

  getTrips(): void {
    this.dataService.getTrips().subscribe(
      trips => {
        this.trips = trips;
      }
    )
  }

}
