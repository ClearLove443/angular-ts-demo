import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string = '';
  private searchCondition: User = new User;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
    withCredentials: true,
  };
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/api/user/getAllUser';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  public findByCondition(searchCondition: User): Observable<User[]> {
    const params = new HttpParams({fromString: 'name=term'});
    return this.http.get<User[]>(this.usersUrl, {responseType: 'json', params});
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
