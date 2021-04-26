import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.apiUrl = '/api/user/getAllUser'
    let url = this.baseUrl + this.apiUrl;
    return this.http.get<User[]>(url);
  }
  public searchByCondition(searchByCondition: User): Observable<User[]> {
    const params = new HttpParams({ fromString: 'name=term' });
    this.apiUrl = ''
    let url = this.baseUrl + this.apiUrl;
    return this.http.get<User[]>(url, {responseType: 'json', params});
  }
  public save(user: User) {
    this.apiUrl = '/api/user/postOneUser'
    let url = this.baseUrl + this.apiUrl;
    console.log(url);
    console.log(user);
    return this.http.post<User>(url, user);
  }
}
