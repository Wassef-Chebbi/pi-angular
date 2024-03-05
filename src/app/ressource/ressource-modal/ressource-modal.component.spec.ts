import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceModalComponent } from './ressource-modal.component';

describe('RessourceModalComponent', () => {
  let component: RessourceModalComponent;
  let fixture: ComponentFixture<RessourceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
