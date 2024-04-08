import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdcatPage } from './prodcat.page';

describe('ProdcatPage', () => {
  let component: ProdcatPage;
  let fixture: ComponentFixture<ProdcatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
