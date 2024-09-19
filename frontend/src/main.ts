import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Import routes from app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Provide the router configuration with routes
    // Add other providers as necessary (e.g., HttpClientModule)
  ]
}).catch(err => console.error(err));
