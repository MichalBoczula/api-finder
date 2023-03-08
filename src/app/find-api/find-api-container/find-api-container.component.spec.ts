import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApiContainerComponent } from './find-api-container.component';

describe('FindApiContainerComponent', () => {
  let component: FindApiContainerComponent;
  let fixture: ComponentFixture<FindApiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindApiContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindApiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
