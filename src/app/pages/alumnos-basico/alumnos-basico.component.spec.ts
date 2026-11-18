import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosBasicoComponent } from './alumnos-basico.component';

describe('AlumnosBasicoComponent', () => {
  let component: AlumnosBasicoComponent;
  let fixture: ComponentFixture<AlumnosBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosBasicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnosBasicoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
