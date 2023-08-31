import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLicensedPersonsComponent } from './list-of-licensed-persons.component';

describe('ListOfLicensedPersonsComponent', () => {
  let component: ListOfLicensedPersonsComponent;
  let fixture: ComponentFixture<ListOfLicensedPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfLicensedPersonsComponent]
    });
    fixture = TestBed.createComponent(ListOfLicensedPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
