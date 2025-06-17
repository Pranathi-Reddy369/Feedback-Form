import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockHighlightDirective } from '../stock-highlight.directive';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule,CommonModule,StockHighlightDirective],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;
@Output() addToCart= new EventEmitter<Product>();

AddCart(){
  this.addToCart.emit(this.product);
}
showFullDescription = false;
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
  Delete(){
    if (this.product.id){
      
    }



  }
}
