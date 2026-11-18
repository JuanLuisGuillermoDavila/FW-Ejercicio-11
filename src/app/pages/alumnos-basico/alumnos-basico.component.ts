import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumnos-basico',
  imports: [FormsModule],
  templateUrl: './alumnos-basico.component.html',
})
export class AlumnosBasicoComponent {
  s = inject(AlumnosService);
}
