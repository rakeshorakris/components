import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldLargeComponent } from './text-field-large.component';

describe('TextFieldLargeComponent', () => {
  let component: TextFieldLargeComponent;
  let fixture: ComponentFixture<TextFieldLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
