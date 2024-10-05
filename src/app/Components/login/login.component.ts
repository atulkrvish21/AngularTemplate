import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; // Import CommonModule if necessary


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Use 'styleUrls' instead of 'styleUrl'
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    // Check if the user is already logged in
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        this.router.navigate(['/dashboard']);
      }
    }
  }
  onLogin() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    // Send HTTP POST request for login
    this.http.post<any>('http://localhost:5122/api/Auth', loginData)
      .subscribe({
        next: (response) => {
          // Assume the server responds with a token
          const token = response.token;

          // Store the token in localStorage
          localStorage.setItem('token', token);

          // Navigate to dashboard or another page after successful login
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid username or password';
        }
      });
  }
}