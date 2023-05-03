import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetStoreProductsComponent } from './pet-store-products.component';

describe('PetStoreProductsComponent', () => {
  let component: PetStoreProductsComponent;
  let fixture: ComponentFixture<PetStoreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetStoreProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetStoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
