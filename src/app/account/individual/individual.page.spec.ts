import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndividualPage } from './individual.page';

describe('IndividualPage', () => {
  let component: IndividualPage;
  let fixture: ComponentFixture<IndividualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
