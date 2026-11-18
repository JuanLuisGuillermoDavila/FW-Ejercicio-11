import { Injectable, computed, signal } from '@angular/core';

export interface Alumno {
  id: number;
  matricula: string;
  nombre: string;
  carrera: string;
  semestre: number;
  status: 'Activo' | 'Baja temporal' | 'Egresado';
}

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  readonly alumnos = signal<Alumno[]>([
    { id: 1, matricula: '20260002598', nombre: 'Luis Enrique Lopez Beltran', carrera: 'Ingeniería en Sistemas Computacionales', semestre: 7, status: 'Activo' },
    { id: 2, matricula: '20240002598', nombre: 'María González Torres', carrera: 'Ingeniería Mecatrónica', semestre: 7, status: 'Activo' },
    { id: 3, matricula: '20240003598', nombre: 'Carlos Ramírez Díaz', carrera: 'Ingeniería en Sistemas Computacionales', semestre: 3, status: 'Baja temporal' },
    { id: 4, matricula: '20240004598', nombre: 'Ana Martínez Ruiz', carrera: 'Ingeniería Ambiental', semestre: 6, status: 'Activo' },
    { id: 5, matricula: '20240005598', nombre: 'Pedro Sánchez Flores', carrera: 'Ingeniería Mecatrónica', semestre: 9, status: 'Egresado' },
  ]);

  // Estado de la interfaz
  readonly busqueda = signal('');
  readonly carrera = signal('Todas');
  readonly mostrarTabla = signal(true);

  // Valores calculados
  readonly carreras = computed(() => [...new Set(this.alumnos().map(a => a.carrera))]);

  readonly filtrados = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();
    const carrera = this.carrera();
    return this.alumnos().filter(a =>
      a.nombre.toLowerCase().includes(texto) &&
      (carrera === 'Todas' || a.carrera === carrera)
    );
  });

  readonly totalAlumnos = computed(() => this.alumnos().length);
  readonly totalActivos = computed(() => this.alumnos().filter(a => a.status === 'Activo').length);
  readonly totalEgresados = computed(() => this.alumnos().filter(a => a.status === 'Egresado').length);

  badgeClass(status: Alumno['status']): string {
    switch (status) {
      case 'Activo': return 'text-bg-success';
      case 'Baja temporal': return 'text-bg-warning';
      case 'Egresado': return 'text-bg-primary';
    }
  }
}
