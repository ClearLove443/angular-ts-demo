import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private baseUrl: string = 'http://localhost:9090';
  private apiUrl: string = '';
  constructor(private http: HttpClient) { }

  public getAllProvince(data: any): Observable<any> {
    this.apiUrl = '/api/province/getAllProvince';
    const url = this.baseUrl + this.apiUrl;
    return this.http.get(url, { params: data }).pipe(tap((res: any) => console.log(res)),
      map((res: any) => res),
      tap((res: any) => console.log(res))
    );
  }

  public getCityByProvince(code: string): Observable<any> {
    this.apiUrl = '/api/province/getCityByProvince';
    const url = this.baseUrl + this.apiUrl;
    const params = new HttpParams().set('code', code);
    return this.http.get(url, { params }).pipe(tap((res: any) => console.log(res)),
      map((res: any) => res),
      tap((res: any) => console.log(res))
    );
  }

  public getDivisions(data: any): Observable<any> {
    this.apiUrl = '/api/province/getDivisions';
    const url = this.baseUrl + this.apiUrl;
    return this.http.get(url, { params: data }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getProvinceCityArea(data: any): Observable<any> {
    this.apiUrl = '/api/province/getProvinceCityArea';
    const url = this.baseUrl + this.apiUrl;
    return this.http.get(url, { params: data }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
