import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarLeftComponent } from './slidebar-left.component';

describe('SlidebarLeftComponent', () => {
  let component: SlidebarLeftComponent;
  let fixture: ComponentFixture<SlidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidebarLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
