import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivItemComponent } from './div-item.component';

describe('DivItemComponent', () => {
  let component: DivItemComponent;
  let fixture: ComponentFixture<DivItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
