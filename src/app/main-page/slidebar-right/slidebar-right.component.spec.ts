import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarRightComponent } from './slidebar-right.component';

describe('SlidebarRightComponent', () => {
  let component: SlidebarRightComponent;
  let fixture: ComponentFixture<SlidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidebarRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
