import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProjectListItemComponent } from './small-project-list-item.component';

describe('SmallProjectListItemComponent', () => {
  let component: SmallProjectListItemComponent;
  let fixture: ComponentFixture<SmallProjectListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallProjectListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallProjectListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
