import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInscriptionComponent } from './student-inscription.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';

describe('StudentInscriptionComponent', () => {
  let component: StudentInscriptionComponent;
  let fixture: ComponentFixture<StudentInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentInscriptionComponent],
      imports: [HttpClientTestingModule, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
