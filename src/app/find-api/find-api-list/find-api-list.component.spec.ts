import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApiListComponent } from './find-api-list.component';

describe('FindApiListComponent', () => {
  let component: FindApiListComponent;
  let fixture: ComponentFixture<FindApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindApiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
