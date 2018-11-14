import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvesterDefitionsComponent } from './harvester-defitions.component';

describe('HarvesterDefitionsComponent', () => {
  let component: HarvesterDefitionsComponent;
  let fixture: ComponentFixture<HarvesterDefitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvesterDefitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvesterDefitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
