import { MoverPage } from './../models/mover-page';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  options = ['PRINT SUBTITLE', 'REMOVE SUBTITLE', 'ADD SUBTITLE'];
  moverOptions: MoverPage;
  subtitles = new BehaviorSubject<Array<string>>(['Stargard', 'Szczecin', 'Choszczno', 'Pyrzyce']);
  moverSubtitles: MoverPage;
  depth: number;
  actualOption: string;
  actualSubtitle: string;
  addedSubtitle: string;

  constructor() {
    this.moverOptions = new MoverPage(this.options);
    this.moverSubtitles = new MoverPage(this.subtitles.value);
    this.depth = 0;
    this.actualOption = '';
    this.actualSubtitle = '';
    this.addedSubtitle = '';
  }

  setActualOption(temp: string) {
    this.actualOption = temp;
  }

  setActualSubtitle(temp: string) {
    this.actualSubtitle = temp;
  }

  setAddedSubtitle(temp: string) {
    this.addedSubtitle = temp;
  }

  increaseDepth() {
    if (this.depth < 2) {
    this.depth++;
    }
  }

  decreaseDepth() {
    if (this.depth > 0) {
      this.depth--;
    }
  }

  removeSubtitle(temp: string) {
    const list = this.subtitles.value.filter( e => temp !== e);
    this.subtitles.next(list);
    this.moverSubtitles.setMover(list);
  }

  addSubtitle(temp: string) {
    const list = this.subtitles.getValue().concat([temp]);
    this.subtitles.next(list);
    this.moverSubtitles.setMover(list);
  }

}
