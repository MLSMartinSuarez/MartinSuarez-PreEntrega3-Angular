import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MockComponent } from 'ng-mocks';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentCoursesComponent } from '../student-courses/student-courses.component';
import { StudentInscriptionComponent } from '../student-inscription/student-inscription.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, MockComponent(NavBarComponent), MockComponent(StudentCoursesComponent), MockComponent(StudentFormComponent), MockComponent(StudentInscriptionComponent)],
      providers: [provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
