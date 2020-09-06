import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveSubCategoryComponent } from './recursive-sub-category.component';

describe('RecursiveSubCategoryComponent', () => {
  let component: RecursiveSubCategoryComponent;
  let fixture: ComponentFixture<RecursiveSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
