import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import{faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  currentRate = 3.14;
  productList: undefined | product[];
  productMessage: undefined | string;
  icon=faTrash;
  editIcon=faEdit;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.List();
    
  }
  deleteProduct(id: number) {
    console.warn("test id", id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is deleted";
        this.List();
      }
    })
    setTimeout(() => {
      this.productMessage = undefined
    }, 3000)
  }
  List(){
    this.product.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result;
    })
  }
}
