import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDonateComponent } from './footer-donate.component';

describe('FooterDonateComponent', () => {
  let component: FooterDonateComponent;
  let fixture: ComponentFixture<FooterDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
