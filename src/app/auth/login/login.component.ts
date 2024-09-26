import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';  // Add a property for the error message

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.errorMessage = ''; // Reset error message before a new login attempt

    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Login successful', response);

        // Save response details into localStorage
        localStorage.setItem('userId', response.id);
        localStorage.setItem('username', response.username);
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);

        // Navigate to the books page
        this.router.navigate(['/books']);  // Change this to your books route
      },
      (error: any) => {
        console.error('Login failed', error);

        // Display an error message if login fails
        this.errorMessage = 'Incorrect username or password. Please try again.';
      }
    );
  }
}
