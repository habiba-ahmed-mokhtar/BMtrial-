import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRegisterComponent } from './component-register.component';

describe('ComponentRegisterComponent', () => {
  let component: ComponentRegisterComponent;
  let fixture: ComponentFixture<ComponentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
