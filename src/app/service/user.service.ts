import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = '';
  private apiUrl: string = '';
  private searchCondition: User = new User;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
    withCredentials: true,
  };
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9090';
  }

  public findAll(): Observable<User[]> {
    this.apiUrl = '/api/user/getAllUser';
    const url = this.baseUrl + this.apiUrl;
    return this.http.get<User[]>(url);
  }
  public searchByCondition(data: any): Observable<any> {
    this.apiUrl = '/api/user/getUserByCondition';
    const url = this.baseUrl + this.apiUrl;
    return this.http.get(url, { params: data }).pipe(tap((res: any) => console.log(res)),
      map((res: any) => res),
      tap((res: any) => console.log(res))
    );
  }
  public save(data: any): Observable<any>  {
    this.apiUrl = '/api/user/postOneUser';
    const url = this.baseUrl + this.apiUrl;
    console.log(url);
    console.log(data);
    // return this.http.post<User>(url, data);
    return this.http.post(url, data).pipe(
      map((res: any) => {
          return res;
      })
  );
  }
}
