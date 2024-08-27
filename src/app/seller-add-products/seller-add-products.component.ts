import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.css']
})
export class SellerAddProductsComponent implements OnInit {
  addProductMessage: string | undefined;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
  submit(data: product) {

    this.product.addProduct(data).subscribe((result) => {
      console.warn(result)
      if(result){
        this.addProductMessage="Product successfully Added"
      }
       setTimeout(()=>(this.addProductMessage=undefined),3000);
    });
  }
}
