import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    private baseUrl = 'http://localhost:8080/car';

    constructor(private http: HttpClient) { }

    getCar(id: number) : Observable<any> {
        return this.http.get(`${this.baseUrl}/selectedCar/${id}`);
    }

    createCar(car: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, car);
      }
    
    updateCar(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/update/${id}`, value);
      }
    
    deleteCar(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
      }
    
    getCarList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/cars`);
      }

    showComments(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/selectedCar/${id}/comments`);
    }

  }