import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl: string = 'http://192.168.2.10:9090';
  private apiUrl: string = '';

  constructor(private http: HttpClient) { }

  // public findAll(): Observable<User[]> {
  //   this.apiUrl = '/api/user/getAllUser';
  //   const url = this.baseUrl + this.apiUrl;
  //   return this.http.get<User[]>(url);
  // }
  public searchByCondition(data: any): Observable<any> {
    this.apiUrl = '/api/user/getUserByCondition';
    const url = this.baseUrl + this.apiUrl;
    return this.http.get(url, { params: data }).pipe(tap((res: any) => console.log(res)),
      map((res: any) => res),
      tap((res: any) => console.log(res))
    );
  }
  public save(data: any): Observable<any> {
    this.apiUrl = '/api/user/postOneUser';
    const url = this.baseUrl + this.apiUrl;
    console.log(data);
    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public delMoreRows(data: any): Observable<any> {
    this.apiUrl = '/api/user/deleteMoreUser';
    const url = this.baseUrl + this.apiUrl;
    console.log(data);
    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public updMoreRows(data: any): Observable<any> {
    this.apiUrl = '/api/user/updateMoreUser';
    const url = this.baseUrl + this.apiUrl;
    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSelectedRows(agGrid: AgGridAngular): any[] {
    const selectedNodes = agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    return selectedData;
    // const selectedDataStringPresentation = selectedData?.map(node => `${node.id}`).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
