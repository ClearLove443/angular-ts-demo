import { Component, OnInit } from '@angular/core';
import { Divisions } from '@app/model/Divisions';
import { ProvinceService } from '@app/service/province.service';

@Component({
  selector: 'app-divisions-select',
  templateUrl: './divisions-select.component.html',
  styleUrls: ['./divisions-select.component.css']
})
export class DivisionsSelectComponent implements OnInit {
  param: Divisions = new Divisions();
  results1!: Divisions[];
  results2?: Divisions[];
  results3?: Divisions[];
  results4?: Divisions[];
  results5?: Divisions[];
  constructor(private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.searchDivisions();
    // this.provinceService.getDivisions(this.param).subscribe(val => {
    //   this.results1 = val;
    // });
  }
  searchDivisions(): void {
    this.provinceService.getDivisions(this.param).subscribe(val => {
      this.results1 = val;
    });
  }
  changeDivisions1(): void {
    this.param.cityCode = '';
    this.param.areaCode = '';
    this.param.streetCode = '';
    this.param.villageCode = '';
    this.results2 = undefined;
    this.results3 = undefined;
    this.results4 = undefined;
    this.results5 = undefined;
    this.provinceService.getDivisions(this.param).subscribe(val => {
      this.results2 = val;
    });
  }
  changeDivisions2(): void {
    this.param.areaCode = '';
    this.param.streetCode = '';
    this.param.villageCode = '';
    this.results3 = undefined;
    this.results4 = undefined;
    this.results5 = undefined;
    this.provinceService.getDivisions(this.param).subscribe(val => {
      this.results3 = val;
    });
  }
  changeDivisions3(): void {
    this.param.streetCode = '';
    this.param.villageCode = '';
    this.results4 = undefined;
    this.results5 = undefined;
    this.provinceService.getDivisions(this.param).subscribe(val => {
      this.results4 = val;
    });
  }
  changeDivisions4(): void {
    this.param.villageCode = '';
    this.results5 = undefined;
    this.provinceService.getDivisions(this.param).subscribe(val => {
      this.results5 = val;
    });
  }
}
