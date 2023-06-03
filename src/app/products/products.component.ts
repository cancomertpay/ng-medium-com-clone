import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product[];
  productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
    this.product = this.productRepository.getProductList();
   }

  ngOnInit(): void {
  }
}
