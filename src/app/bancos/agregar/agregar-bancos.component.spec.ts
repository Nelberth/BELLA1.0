import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBancosComponent } from './agregar-bancos.component';

describe('AgregarBancosComponent', () => {
  let component: AgregarBancosComponent;
  let fixture: ComponentFixture<AgregarBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBancosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
