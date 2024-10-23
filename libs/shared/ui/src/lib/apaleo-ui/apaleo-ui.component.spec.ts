import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApaleoUiComponent } from './apaleo-ui.component';

describe('ApaleoUiComponent', () => {
  let component: ApaleoUiComponent;
  let fixture: ComponentFixture<ApaleoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApaleoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApaleoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
