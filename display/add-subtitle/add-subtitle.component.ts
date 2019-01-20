import { Keyboard } from './../models/keyboard';
import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-add-subtitle',
  templateUrl: './add-subtitle.component.html',
  styleUrls: ['./add-subtitle.component.css']
})
export class AddSubtitleComponent {

  mykey: Keyboard;
  constructor(private service: DisplayService) {
    this.mykey = new Keyboard();
  }

  next() {
    this.mykey.write();
  }

  prev() {
    this.mykey.remove();
  }

  accept() {
    this.service.setAddedSubtitle(this.mykey.getTag());
    this.mykey.setTag('');
    this.service.increaseDepth();
  }

  cancel() {
    this.mykey.setTag('');
    this.service.decreaseDepth();
  }



}
