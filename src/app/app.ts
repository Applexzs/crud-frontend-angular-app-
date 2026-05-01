import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { ProductComponent } from './products/components/product/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgForOf, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Hola Mundo Angular";
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'Springboot'];

  setEnabled(): void {
    this.enabled = this.enabled ? false: true;
    console.log("Hemos hecho clic en setEnable");
  }
}
