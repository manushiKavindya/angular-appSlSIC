import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnItemComponent } from './scn-item.component';

describe('ScnItemComponent', () => {
  let component: ScnItemComponent;
  let fixture: ComponentFixture<ScnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
