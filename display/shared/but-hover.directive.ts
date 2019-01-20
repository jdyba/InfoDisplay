import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appButHover]'
})
export class ButHoverDirective  {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter', ['$event'])
  mouseEnter(eventDate: Event) {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'cursor', 'pointer');
    this.renderer.setStyle(button, 'background-color', 'rgb(205, 119, 7)');
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(eventDate: Event) {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'background-color', 'rgb(235, 159, 27)');
  }

}


