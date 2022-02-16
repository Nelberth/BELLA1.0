import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlmacenEliminarComponent } from './modal-almacen-eliminar.component';

describe('ModalAlmacenEliminarComponent', () => {
  let component: ModalAlmacenEliminarComponent;
  let fixture: ComponentFixture<ModalAlmacenEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlmacenEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlmacenEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
