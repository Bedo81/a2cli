import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-search-box',
  template: `
    <p>
      <input type="text" class="form-control" placeholder="Search" autofocus>
    </p>
  `,
  styles: []
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<any[]> = new EventEmitter<any>();


  constructor(public dataService: DataService,
              private el: ElementRef) { }

  ngOnInit() {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, "keyup")
              .map((e: any) => e.target.value) // extract the value of the input
              .filter((text: string) => text.length > 1) // filter out if empty
              .debounceTime(250)                             // only once every 250ms
              .do(() => this.loading.next(true))         // enable loading
              // search, discarding old events if new input comes in
              .map((query: string) => this.dataService.getTrips(query))
              .switch()
              // act on the return of the search
              .subscribe(
                (results: any[]) => { // on sucesss
                  this.loading.next(false);
                  this.results.next(results);
                },
                (err: any) => { // on error
                  console.log(err);
                  this.loading.next(false);
                },
                () => { // on completion
                  this.loading.next(false);
                }
              );
  }

}
