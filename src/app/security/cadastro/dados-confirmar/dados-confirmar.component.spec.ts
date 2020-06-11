import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosConfirmarComponent } from './dados-confirmar.component';

describe('DadosConfirmarComponent', () => {
  let component: DadosConfirmarComponent;
  let fixture: ComponentFixture<DadosConfirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosConfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
