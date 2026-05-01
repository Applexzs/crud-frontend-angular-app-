import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { Form } from './form';


@Component({
  selector: 'app-product',
  imports: [Form],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  productSelected: Product = new Product();

  constructor(private service: ProductService){
  }
  
  ngOnInit(): void{
    this.service.findAll().subscribe(products => {
      this.products = products;
    })
  }

  addProduct(product: Product) {
    if(product.id > 0){
      this.products = this.products.map(prod => {
        if(prod.id == product.id){
          return {... product}
        }else{
          return prod;
        }
      });
    }else{
      product.id = new Date().getTime();
      this.products.push(product);
    }

    // this.products = [...this.products, {...product, id: new Date().getTime()}]
  }

  onUpdateProduct(product: Product) {
    this.productSelected = product;
  }
}
