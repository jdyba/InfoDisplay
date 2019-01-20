import { Component } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-show-subtitle',
  templateUrl: './show-subtitle.component.html',
  styleUrls: ['./show-subtitle.component.css']
})
export class ShowSubtitleComponent {

  showedSubtitle: string;

  constructor(public service: DisplayService) {
    this.showedSubtitle = this.service.actualSubtitle;
    this.service.setActualSubtitle('');
   }

  cancel() {
    this.service.decreaseDepth();
    this.service.decreaseDepth();
  }
}
