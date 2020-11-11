import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTrendingComponent } from './main-trending.component';

describe('MainTrendingComponent', () => {
  let component: MainTrendingComponent;
  let fixture: ComponentFixture<MainTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
