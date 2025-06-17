import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
    standalone: true,
  imports: [ProductCardComponent,FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productService: ProductService){}
  count=0;
  selectedFilter = 'All';
  searchTerm = '';
  cart: Product[] = [];
  products: Product[]=[];
  
  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (data)=>{
        this.products=data;
        console.log(this.products);
      },
      error: (err: any)=>{
        console.error('Failed to fetch products',err);
      }
    })
  }
  get filteredProducts(): Product[] {
    let filtered = [...this.products];

    // Stock filter
    if (this.selectedFilter === 'InStock') {
      filtered = filtered.filter(p => p.availabilityStatus === 'In Stock');
    } else if (this.selectedFilter === 'OutOfStock') {
      filtered = filtered.filter(p => p.availabilityStatus === 'Low Stock');
    }

    // Search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        (p.title?.toLowerCase().includes(term)?? false) ||
        (p.brand?.toLowerCase().includes(term) ?? false)
      );
    }

    return filtered;
  }

  //  dropdown 
  onFilterChange(event: Event): void {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
  }

  //  search 
  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  // cart
  onAddToCart(product: Product): void {
    this.cart.push(product);
    this.count = this.cart.length;
  }
}


