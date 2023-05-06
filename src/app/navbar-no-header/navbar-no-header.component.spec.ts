import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNoHeaderComponent } from './navbar-no-header.component';

describe('NavbarNoHeaderComponent', () => {
  let component: NavbarNoHeaderComponent;
  let fixture: ComponentFixture<NavbarNoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarNoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
