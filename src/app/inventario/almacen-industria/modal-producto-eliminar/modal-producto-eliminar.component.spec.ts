import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductoEliminarComponent } from './modal-producto-eliminar.component';

describe('ModalProductoEliminarComponent', () => {
  let component: ModalProductoEliminarComponent;
  let fixture: ComponentFixture<ModalProductoEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProductoEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
