import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurseBoxesComponent } from './curse-boxes.component';

describe('CurseBoxesComponent', () => {
  let component: CurseBoxesComponent;
  let fixture: ComponentFixture<CurseBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurseBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurseBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
