// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    if ((username === 'Devanshi' && password === 'Devanshi') ||
        (username === 'Kesha' && password === 'Kesha')) {
      this.currentUser = { username, role: username === 'Devanshi' ? 'admin' : 'member' };
      localStorage.setItem('token', 'dummy-token');
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isInRole(role: string): boolean {
    alert(this.currentUser);
    alert(this.currentUser.role);
    return this.currentUser && this.currentUser.role === role;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUser = null;
  }
}
