import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratclientComponent } from './contratclient.component';

describe('ContratclientComponent', () => {
  let component: ContratclientComponent;
  let fixture: ComponentFixture<ContratclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
