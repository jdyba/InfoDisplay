import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matrix-led',
  templateUrl: './matrix-led.component.html',
  styleUrls: ['./matrix-led.component.css']
})
export class MatrixLedComponent implements OnInit {

  @Input()
  valueMatrix: string;

  constructor() { }

  ngOnInit() {
  }

}
