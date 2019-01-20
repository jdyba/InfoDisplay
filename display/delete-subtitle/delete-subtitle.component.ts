import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-delete-subtitle',
  templateUrl: './delete-subtitle.component.html',
  styleUrls: ['./delete-subtitle.component.css']
})
export class DeleteSubtitleComponent implements OnInit {

  deleteSubtitle: string;

  constructor(public service: DisplayService) {
    this.deleteSubtitle = this.service.actualSubtitle;
    this.service.setActualSubtitle('');
    this.removeSubtitle();
   }

  ngOnInit() {
  }

  cancel() {
    this.service.decreaseDepth();
    this.service.decreaseDepth();
  }

  removeSubtitle() {
    this.service.removeSubtitle(this.deleteSubtitle);
  }
}
