import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appButDisabled]'
})
export class ButDisabledDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'opacity', '0.3');
  }

}
