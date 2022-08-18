import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfilesComponent } from './displayfiles.component';

describe('DisplayfilesComponent', () => {
  let component: DisplayfilesComponent;
  let fixture: ComponentFixture<DisplayfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
