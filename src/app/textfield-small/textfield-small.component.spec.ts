import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldSmallComponent } from './textfield-small.component';

describe('TextfieldSmallComponent', () => {
  let component: TextfieldSmallComponent;
  let fixture: ComponentFixture<TextfieldSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
