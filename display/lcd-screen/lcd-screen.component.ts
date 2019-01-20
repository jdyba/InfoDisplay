import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lcd-screen',
  templateUrl: './lcd-screen.component.html',
  styleUrls: ['./lcd-screen.component.css']
})
export class LcdScreenComponent implements OnInit {

  @Input()
  valueLcd: string;

  constructor() { }

  ngOnInit() {
  }

}
