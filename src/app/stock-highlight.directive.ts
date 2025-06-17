import { Directive, ElementRef, Input,  OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStockHighlight]',
  standalone: true
})
export class StockHighlightDirective implements OnInit {
  @Input('appStockHighlight') stock!: number;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    if (this.stock > 50) {
      this.el.nativeElement.style.color = 'green';
    } else if (this.stock > 10) {
      this.el.nativeElement.style.color = 'orange';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
