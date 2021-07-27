import { BasePage } from '@acts/front-core';
import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceQuery } from '@app/business/province/queries/province.query';
import { ProvinceService } from '@app/business/province/services/province.service';
import { Divisions } from '@app/model/Divisions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent extends BasePage implements OnInit, OnDestroy {
  // form!: Province;
  // provinces!: Province[];
  // citys!: City[];
  // provinceCode!: string;
  // cityCode!: string;
  param: Divisions = new Divisions();
  param2: Divisions = new Divisions();
  results!: Divisions[];
  currentProduct!: string;

  // subscriptions
  public subscriptions: Array<Subscription> = [];

  public loading = this.provinceQuery.selectLoading();

  constructor(
    public injector: Injector,
    private provinceService: ProvinceService,
    private provinceQuery: ProvinceQuery,
    private route: ActivatedRoute,
    private router: Router) {
    super(injector);
    this.subscriptions = [
      this.provinceQuery.select('divisions').subscribe(res => {
        this.results = res;
      }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

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
    // this.provinceService.getDivisions(this.param).subscribe(val => {
    //   this.results = val;
    // });
    // alert("2")
    this.provinceService.getDivisions(this.param).subscribe(obs => {
      // alert(val)
    });
  }
  provinceClick(provinceCode: any): void {
    window.open(`divisions/${provinceCode}`, 'cityDetail', 'width=1402,height=685');
  }
}
