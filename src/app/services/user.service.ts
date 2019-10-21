import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl = 'http://localhost:8080/user';

    constructor(private http: HttpClient) { }

    getUserById(id: number) : Observable<any> {
        return this.http.get(`${this.baseUrl}/selectedUser/${id}`);
    }

    addUser(user: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/users`, user);
      }
    
    updateUser(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/update/${id}`, value);
      }
    
    deleteUser(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
      }
    
    getUsers(): Observable<any> {
        return this.http.get(`${this.baseUrl}/users`);
      }

  }