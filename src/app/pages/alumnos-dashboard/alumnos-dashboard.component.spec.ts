import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosDashboardComponent } from './alumnos-dashboard.component';

describe('AlumnosDashboardComponent', () => {
  let component: AlumnosDashboardComponent;
  let fixture: ComponentFixture<AlumnosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnosDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
