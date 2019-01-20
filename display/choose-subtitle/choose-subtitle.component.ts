import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-choose-subtitle',
  templateUrl: './choose-subtitle.component.html',
  styleUrls: ['./choose-subtitle.component.css']
})
export class ChooseSubtitleComponent {

  actualSubtitle: string;

  constructor(private service: DisplayService) {
    this.service.moverSubtitles.getTitlePage().subscribe((value: string) => {
      this.actualSubtitle = value;
    });
   }

  next() {
    this.service.moverSubtitles.nextPage();
  }

  prev() {
    this.service.moverSubtitles.prevPage();
  }

  accept() {
    this.service.setActualSubtitle(this.actualSubtitle);
    this.service.increaseDepth();
  }

  cancel() {
    this.service.decreaseDepth();
  }
}
