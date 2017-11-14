import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPublicacionComponent } from './tipo-publicacion.component';

describe('TipoPublicacionComponent', () => {
  let component: TipoPublicacionComponent;
  let fixture: ComponentFixture<TipoPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
