import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddProductsComponent } from './seller-add-products.component';

describe('SellerAddProductsComponent', () => {
  let component: SellerAddProductsComponent;
  let fixture: ComponentFixture<SellerAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
