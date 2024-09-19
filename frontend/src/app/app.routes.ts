import { Routes } from '@angular/router';

// Define routes for standalone components
export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },

  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route redirects to /login
  { path: '**', redirectTo: '/login' }  // Wildcard route to handle unknown paths
];
