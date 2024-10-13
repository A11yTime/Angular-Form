import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleFormComponent } from './accessible-form.component';

describe('AccessibleFormComponent', () => {
  let component: AccessibleFormComponent;
  let fixture: ComponentFixture<AccessibleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
