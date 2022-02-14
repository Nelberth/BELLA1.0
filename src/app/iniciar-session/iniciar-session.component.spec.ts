import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessionComponent } from './iniciar-session.component';

describe('IniciarSessionComponent', () => {
  let component: IniciarSessionComponent;
  let fixture: ComponentFixture<IniciarSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
