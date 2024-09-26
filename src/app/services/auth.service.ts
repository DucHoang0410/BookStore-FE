 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Ensure this service is provided globally
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}  // Ensure HttpClient is injected correctly

  login(username: string, password: string): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   const body ={
      username: username,
      password: password
   }
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  register(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    return this.http.post(`${this.apiUrl}/register`, body, { headers });
  }
}
