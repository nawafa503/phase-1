import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, Router} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule,HttpClientModule],  // Import RouterLink in the standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'frontend';

  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  // Logout method
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);  // Redirect to login page
  }

}
