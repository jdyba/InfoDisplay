import { BehaviorSubject } from 'rxjs';
export class MoverPage {

  pages: string[];
  actualPage;
  pagesNumber;
  pageTitle = new BehaviorSubject<string>('');


  constructor(temp: string[]) {
    this.setMover(temp);
   }

   setMover(temp: string[]) {
    this.pages = temp;
    this.actualPage = 0;
    this.pagesNumber = this.pages.length - 1;
    this.setTitlePage();
  }

  setTitlePage() {
    this.pageTitle.next(this.pages[this.actualPage]);
  }

  getTitlePage() {
    return this.pageTitle.asObservable();
  }

  nextPage() {
      if (this.actualPage >= this.pagesNumber) {
        this.actualPage = 0;
      } else {
        this.actualPage++;
      }
    this.setTitlePage();
  }

  prevPage() {
      if (this.actualPage <= 0) {
        this.actualPage = this.pagesNumber;
      } else {
        this.actualPage--;
      }
    this.setTitlePage();
  }
}
