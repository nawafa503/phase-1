import {Component, NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  standalone: true,  // Mark this component as standalone
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService],
  imports: [CommonModule, FormsModule, HttpClientModule],  // Add HttpClientModule to imports
})


export class AuthComponent {
  username = '';
  password = '';
  message =  '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Handle success response
        this.authService.setToken(response.token);  // Store token
        this.router.navigate(['/dashboard']);       // Navigate to dashboard
      },
      error => {
        // Handle error response, e.g., 401 Unauthorized
        if (error.status === 401) {
          this.message = 'Invalid username or password';  // Display error message
        } else {
          this.message = 'An error occurred. Please try again.';  // Other errors
        }
      }
    );
  }
}
