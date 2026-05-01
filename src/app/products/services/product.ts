import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Mesa Comedor",
      description: "Excelente mesa para el comedor",
      price: 700
    },
    {
      id: 2,
      name: "Teclado Mecanico",
      description: "Excelente Teclado",
      price: 500
    }
  ];
  constructor() {

  }

  findAll(): Observable<Product[]> {
    return of(this.products);
  }

}
