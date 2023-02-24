import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApiElementComponent } from './find-api-element.component';

describe('FindApiElementComponent', () => {
  let component: FindApiElementComponent;
  let fixture: ComponentFixture<FindApiElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindApiElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindApiElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
