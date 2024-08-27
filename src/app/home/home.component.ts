import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | product[]
  trendyProducts: undefined | product[];
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.productList().subscribe((data) => {
      console.warn(data);
      this.popularProducts = data;
    }
    );
    
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
  }

}
