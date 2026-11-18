import { Routes } from '@angular/router';
import { AlumnosBasicoComponent } from './pages/alumnos-basico/alumnos-basico.component';
import { AlumnosDashboardComponent } from './pages/alumnos-dashboard/alumnos-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'basico', pathMatch: 'full' },
  { path: 'basico', component: AlumnosBasicoComponent },
  { path: 'dashboard', component: AlumnosDashboardComponent },
];
