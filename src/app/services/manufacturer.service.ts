import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ManufacturerService {

    private baseUrl = 'http://localhost:8080/manufacturer';

    constructor(private http: HttpClient) { }

    getManufacturer(id: number) : Observable<any> {
        return this.http.get(`${this.baseUrl}/selectedManufacturer/${id}`);
    }

    addManufacturer(manufacturer: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, manufacturer);
      }
    
      updateManufacturer(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/update/${id}`, value);
      }
    
    /* deleteManufacturer(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
      }
     */
    getManufacturers(): Observable<any> {
        return this.http.get(`${this.baseUrl}/manufacturers`);
      }

    showModels(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/selectedManufacturer/${id}/models`);
    }

  }