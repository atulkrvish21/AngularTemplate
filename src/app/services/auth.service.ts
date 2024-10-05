// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return token !== null; // Return true if token exists, false otherwise
    }
    return false; // Not in the browser environment
  }

  // Optionally implement login and logout methods
  login(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}
