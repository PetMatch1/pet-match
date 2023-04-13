import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFilterComponent } from './dog-filter.component';

describe('DogFilterComponent', () => {
  let component: DogFilterComponent;
  let fixture: ComponentFixture<DogFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
