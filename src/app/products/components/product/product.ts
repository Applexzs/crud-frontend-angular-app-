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

  addProduct(product: Product): void {
    if(product.id > 0){
      this.service.update(product).subscribe( productUpdated => {

        this.products = this.products.map(prod => {
          if(prod.id == product.id){
            return {... product}
          }else{
            return prod;
          }
        });
      });
    }else{
      this.service.create(product).subscribe(productNew => {
        // product.id = new Date().getTime();
        this.products.push(productNew);
        // this.products = [...this.products, {...productNew}]
      });
    }
    this.productSelected = new Product();
    
  }

  onRemoveProduct(id: number): void{
    this.service.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id != id);
    });
  }

  onUpdateProduct(product: Product): void {
    this.productSelected = {...product};
  }

}
