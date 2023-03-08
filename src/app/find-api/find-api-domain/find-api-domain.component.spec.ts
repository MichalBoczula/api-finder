import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApiDomainComponent } from './find-api-domain.component';

describe('FindApiDomainComponent', () => {
  let component: FindApiDomainComponent;
  let fixture: ComponentFixture<FindApiDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindApiDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindApiDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
