import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Login successful', response);

        // Save response details into localStorage
        localStorage.setItem('userId', response.id);
        localStorage.setItem('username', response.username);
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);

        // Navigate to the books page
        this.router.navigate(['/register']);
      },
      (error: any) => {
        console.error('Login failed', error);
      }
    );
  }
}
