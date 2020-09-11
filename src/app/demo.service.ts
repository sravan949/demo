import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://reqres.in/apiss/users?page=2');
  }
}
