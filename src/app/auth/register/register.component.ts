import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  
  constructor(private authService: AuthService) {}

  // Nhận giá trị username và password từ form
  onRegister(username: string, password: string): void {
    this.authService.register(username, password).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        // Xử lý sau khi đăng ký thành công
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
