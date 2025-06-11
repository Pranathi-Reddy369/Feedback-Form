import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostBinding('class.hovered') isHovered=false;
  @HostBinding('mouseenter') onHover(){
    this.isHovered = true ;
  }
  ngOnInit(): void{
    this.renderer.setStyle (this.el.nativeElement,'color',  'orange')
  }

}
