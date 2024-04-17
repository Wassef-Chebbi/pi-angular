import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRessourceComponent } from './manage-ressource.component';

describe('ManageRessourceComponent', () => {
  let component: ManageRessourceComponent;
  let fixture: ComponentFixture<ManageRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRessourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
