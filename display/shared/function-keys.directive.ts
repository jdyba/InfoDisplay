import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFunctionKeys]'
})
export class FunctionKeysDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {

    const divMenu = this.el.nativeElement;
    const buttons = divMenu.children;

    this.renderer.setStyle(divMenu, 'width', '500px');
    this.renderer.setStyle(divMenu, 'height', '60px');
    this.renderer.setStyle(divMenu, 'line-height', '60px');
    for (const button of buttons) {
      this.renderer.setStyle(button, 'background-color', 'rgb(235, 159, 27)');
      this.renderer.setStyle(button, 'margin', '5px');
      this.renderer.setStyle(button, 'width', 'calc((100%/4) - 10px)');
      this.renderer.setStyle(button, 'border-radius', '20px');
      this.renderer.setStyle(button, 'font-size', '20px');
      this.renderer.setStyle(button, 'padding', '10px');
      this.renderer.setStyle(button, 'color', 'white');
      this.renderer.setStyle(button, 'font-weight', 'bold');
      this.renderer.setStyle(button, 'border', '2px solid #fff');
    }



  }
}


