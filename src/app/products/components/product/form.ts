import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  @Input() product: Product = { id: 0, name: "", description: "", price: 0};

  @Output() newProductEvent = new EventEmitter();

  onSubmit(): void {
    this.newProductEvent.emit(this.product);
    console.log(this.product);
  }

  clean(): void {
    this.product = new Product();
  }
}

