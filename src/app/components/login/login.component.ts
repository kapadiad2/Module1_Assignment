import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

 login() {
  console.log('Logging in with:', this.username, this.password);
  this.authService.login(this.username, this.password).subscribe(success => {
    console.log('Login response:', success);
    if (success) {
      this.router.navigate(['/person']);
    } else {
      alert('Invalid credentials');
    }
  });
}
}
