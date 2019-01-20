import { Button } from './button';
export class Keyboard {

  buttonsList: Array<Button> = [];
  names = ['.,-', 'ABC', 'DEF',
          'GHI', 'JKL', 'MNO',
          'PQRS', 'TUV', 'WXYZ'];
  tag;

  constructor() {
    this.createKeyboard();
    this.tag = '';
  }

  setTag(temp: string) {
      this.tag = temp;
  }

  getTag(): string {
    return this.tag;
  }

  createKeyboard() {
    for (const item of this.names) {
      this.buttonsList.push(new Button(item));
    }
  }

  add(button) {
    for (const item of this.buttonsList) {
      if (item.name !== button.name) {
          if (item.value !== 0) {
              this.tag += item.name[item.value - 1];
            }
          item.value = 0;
      } else {
            if (button.value >= 2 && button.name.length < 4) {
              this.tag += button.name[button.value];
              button.value = 0;
            } else if (button.value >= 3) {
              this.tag += button.name[button.value];
              button.value = 0;
            } else {
              button.value++;
            }
      }
    }
  }

  write() {
    for (const item of this.buttonsList) {
      if (item.value > 0) {
        this.tag += item.name[item.value - 1];
      }
    item.value = 0;
    }
  }

  remove() {
    this.tag = this.tag.slice(0, -1);
    for (const item of this.buttonsList) {
      item.value = 0;
    }
  }
}
