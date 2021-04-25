import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  // templateUrl: './demos.component.html',
  template: `
    <app-demo></app-demo>`,
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
