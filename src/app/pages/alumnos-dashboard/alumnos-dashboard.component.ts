import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumnos-dashboard',
  imports: [FormsModule],
  templateUrl: './alumnos-dashboard.component.html',
  styleUrl: './alumnos-dashboard.component.css',
})
export class AlumnosDashboardComponent {
  s = inject(AlumnosService);
}
