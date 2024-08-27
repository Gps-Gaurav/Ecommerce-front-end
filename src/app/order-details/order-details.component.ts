import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  trackProducts: undefined | product[];
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.trackProducts().subscribe((data) => {
      this.trackProducts = data;
    });
  }
}


