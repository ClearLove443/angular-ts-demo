import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Divisions } from '@app/model/Divisions';
import { ProvinceService } from '@app/service/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  // form!: Province;
  // provinces!: Province[];
  // citys!: City[];
  // provinceCode!: string;
  // cityCode!: string;
  param: Divisions = new Divisions();
  param2: Divisions = new Divisions();
  results!: Divisions[];
  currentProduct!: string;
  constructor(private provinceService: ProvinceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const provinceCode = this.route.snapshot.paramMap.get('divisions.provinceCode');
    const cityCode = this.route.snapshot.paramMap.get('divisions.cityCode');
    const areaCode = this.route.snapshot.paramMap.get('divisions.areaCode');
    const streetCode = this.route.snapshot.paramMap.get('divisions.streetCode');
    if (!!provinceCode) {
      this.param.provinceCode = provinceCode;
    }
    if (!!cityCode) {
      this.param.cityCode = cityCode;
    }
    if (!!areaCode) {
      this.param.areaCode = areaCode;
    }
    if (!!streetCode) {
      this.param.streetCode = streetCode;
    }
    this.searchDivisions();
  }
  // searchProvince(): void {
  //   this.provinceService.getAllProvince(this.form).subscribe(val => {
  //     console.log(val);
  //     this.provinces = val;
  //   });
  // }
  // searchCityByProvince(code: string): void {
  //   this.provinceService.getCityByProvince(code).subscribe(val => {
  //     console.log(val);
  //     this.citys = val;
  //   });
  // }

  searchDivisions(): void {
    this.provinceService.getDivisions(this.param).subscribe(val => {
      this.results = val;
    });
  }
  provinceClick(provinceCode:any): void {
    window.open(`/${provinceCode}`,'cityDetail','width=1402,height=685')
  }
}
