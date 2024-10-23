import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApaleoAdminUsersComponent } from './apaleo-admin-users.component';

describe('ApaleoAdminUsersComponent', () => {
  let component: ApaleoAdminUsersComponent;
  let fixture: ComponentFixture<ApaleoAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApaleoAdminUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApaleoAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
