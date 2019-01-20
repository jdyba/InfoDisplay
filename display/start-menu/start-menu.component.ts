import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';
import { stringify } from '@angular/compiler/src/util';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  actualOptions: string;

  constructor(private service: DisplayService) {
    this.service.moverOptions.getTitlePage().subscribe((value: string) => {
      this.actualOptions = value;
    });
   }

  ngOnInit() {
  }

  next() {
    this.service.moverOptions.nextPage();
  }

  prev() {
    this.service.moverOptions.prevPage();
  }

  accept() {
    this.service.setActualOption(this.actualOptions);
    this.service.increaseDepth();
  }
}
