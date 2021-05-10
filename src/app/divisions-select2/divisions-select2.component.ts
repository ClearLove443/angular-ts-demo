import { Component, OnInit } from '@angular/core';
import { Divisions } from '@app/model/Divisions';
import { ProvinceService } from '@app/service/province.service';

@Component({
  selector: 'app-divisions-select2',
  templateUrl: './divisions-select2.component.html',
  styleUrls: ['./divisions-select2.component.css']
})
export class DivisionsSelect2Component implements OnInit {
  param: Divisions = new Divisions();
  division: any = [
    {
      provinceCode: '11',
      provinceName: '北京市',
      cityCode: '1101',
      cityName: '市辖区',
      areaCode: '110101',
      areaName: '东城区'
    },
    {
      provinceCode: '11',
      provinceName: '北京市',
      cityCode: '1101',
      cityName: '市辖区',
      areaCode: '110102',
      areaName: '西城区'
    }
  ];
  citys: any;
  areas: any;
  constructor(private provinceService: ProvinceService) { }

  ngOnInit(): void {
    // this.searchDivisions();
    let provinceCode = '';
    let provinceName = '';
    const division2 = [];
    let cityCode = '';
    let cityName = '';
    this.division.map((i: { provinceCode: string, provinceName: string; cityCode: string, cityName: string; }) => {
      // tslint:disable-next-line: prefer-const
      let city = {};
      let province = { provinceCode, provinceName, city };
      if (i.provinceCode !== provinceCode) {
        provinceCode = i.provinceCode;
        provinceName = i.provinceName;
        // province.provinceCode = provinceCode;
        province = { provinceCode, provinceName, city };
        console.log(province);
      }
      if (i.cityCode !== cityCode) {
        cityCode = i.cityCode;
        cityName = i.cityName;
        city = { cityCode, cityName };
        province.city = city;
      }

    });
  }
  searchDivisions(): void {
    this.provinceService.getProvinceCityArea(this.param).subscribe(val => {
      this.division = val;
    });
  }

  changeDivisions1(): void {
    this.param.cityCode = '';
    this.param.areaCode = '';
    this.citys = [];
    this.areas = [];
    this.param.streetCode = '';
    this.param.villageCode = '';
    this.citys = this.division.filter((i: { provinceCode: string; }) => i.provinceCode === this.param.provinceCode)[0].city;
  }
  changeDivisions2(): void {
    this.param.areaCode = '';
    this.param.streetCode = '';
    this.param.villageCode = '';
    this.areas = [];
    this.areas = this.citys.filter((i: { cityCode: string; }) => i.cityCode === this.param.cityCode)[0].area;
  }
}
