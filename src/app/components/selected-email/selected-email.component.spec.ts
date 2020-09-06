import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEmailComponent } from './selected-email.component';

describe('SelectedEmailComponent', () => {
  let component: SelectedEmailComponent;
  let fixture: ComponentFixture<SelectedEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
