import { BaseService } from '@acts/front-core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Divisions } from '../store/province.model';
import { ProvinceStore } from '../store/province.store';

/**
 * Province service
 *
 * @export
 * @class ProvinceService
 */
@Injectable({ providedIn: 'root' })
export class ProvinceService extends BaseService {
  private baseUrl: string = 'http://localhost:9090';
  private apiUrl: string = '';

  constructor(
    private provinceStore: ProvinceStore,
    private http: HttpClient
  ) {
    super();
  }

  public getDivisions(param: any): Observable<boolean> {
    this.apiUrl = '/api/province/getDivisions';
    const url = this.baseUrl + this.apiUrl;
    this.provinceStore.setLoading(true);
    return new Observable((obs) => {
      this.initializeLoadingState(this.provinceStore);
      this.http.get<Divisions[]>(url, { params: param }).pipe(
        catchError(this.handleError(this.provinceStore)))
        .subscribe((result) => {
          this.provinceStore.update({
            divisions: result
          });
          this.provinceStore.setLoading(false);
          obs.next(true);
        });
    });
  }
}
