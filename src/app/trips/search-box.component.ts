import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  outputs: ["loading", "results"],
  selector: 'app-search-box',
  template: `
    <p>
      <input type="text" class="form-control" placeholder="Search" autofocus>
    </p>
  `,
  styles: []
})
export class SearchBoxComponent implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<any[]> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

}
