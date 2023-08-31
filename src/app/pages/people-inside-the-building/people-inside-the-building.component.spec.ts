import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInsideTheBuildingComponent } from './people-inside-the-building.component';

describe('PeopleInsideTheBuildingComponent', () => {
  let component: PeopleInsideTheBuildingComponent;
  let fixture: ComponentFixture<PeopleInsideTheBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleInsideTheBuildingComponent]
    });
    fixture = TestBed.createComponent(PeopleInsideTheBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
