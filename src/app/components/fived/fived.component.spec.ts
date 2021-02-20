import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDComponent } from './fived.component';

describe('FiveDComponent', () => {
  let component: FiveDComponent;
  let fixture: ComponentFixture<FiveDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
