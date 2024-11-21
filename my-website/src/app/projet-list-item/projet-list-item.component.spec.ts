import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetListItemComponent } from './projet-list-item.component';

describe('ProjetListItemComponent', () => {
  let component: ProjetListItemComponent;
  let fixture: ComponentFixture<ProjetListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
