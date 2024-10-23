import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApaleoAdminDomainComponent } from './apaleo-admin-domain.component';

describe('ApaleoAdminDomainComponent', () => {
  let component: ApaleoAdminDomainComponent;
  let fixture: ComponentFixture<ApaleoAdminDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApaleoAdminDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApaleoAdminDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
