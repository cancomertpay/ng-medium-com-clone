import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor() {
   }

  ngOnInit(): void {
  }
}
