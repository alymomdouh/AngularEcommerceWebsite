import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() data!: Product
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0
  constructor() { }

  add() {
    this.item.emit({ item: this.data, quantity: this.amount })
  }
}
