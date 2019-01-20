import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-control-program',
  templateUrl: './control-program.component.html',
  styleUrls: ['./control-program.component.css']
})
export class ControlProgramComponent implements OnInit {

  constructor(public service: DisplayService) { }

  ngOnInit() {
  }

}
