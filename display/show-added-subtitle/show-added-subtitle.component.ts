import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-show-added-subtitle',
  templateUrl: './show-added-subtitle.component.html',
  styleUrls: ['./show-added-subtitle.component.css']
})
export class ShowAddedSubtitleComponent implements OnInit {

  addedSubtitle: string;

  constructor(public service: DisplayService) {
    this.addedSubtitle = this.service.addedSubtitle;
    this.addSubtitle();
   }

  ngOnInit() {
  }

  cancel() {
    this.service.decreaseDepth();
    this.service.decreaseDepth();
  }

  addSubtitle() {
    this.service.addSubtitle(this.addedSubtitle);
  }
}
