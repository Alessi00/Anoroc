import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIInfoPageComponent } from './aiinfo-page.component';

describe('AIInfoPageComponent', () => {
  let component: AIInfoPageComponent;
  let fixture: ComponentFixture<AIInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AIInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
