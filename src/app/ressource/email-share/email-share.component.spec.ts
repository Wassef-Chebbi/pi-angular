import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailShareComponent } from './email-share.component';

describe('EmailShareComponent', () => {
  let component: EmailShareComponent;
  let fixture: ComponentFixture<EmailShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
