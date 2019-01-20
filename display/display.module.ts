import { ControlProgramComponent } from './control-program/control-program.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubtitleComponent } from './add-subtitle/add-subtitle.component';
import { ChooseSubtitleComponent } from './choose-subtitle/choose-subtitle.component';
import { DeleteSubtitleComponent } from './delete-subtitle/delete-subtitle.component';
import { LcdScreenComponent } from './lcd-screen/lcd-screen.component';
import { MatrixLedComponent } from './matrix-led/matrix-led.component';
import { ShowAddedSubtitleComponent } from './show-added-subtitle/show-added-subtitle.component';
import { ShowSubtitleComponent } from './show-subtitle/show-subtitle.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ButDisabledDirective } from './shared/but-disabled.directive';
import { ButHoverDirective } from './shared/but-hover.directive';
import { FunctionKeysDirective } from './shared/function-keys.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
  ControlProgramComponent,
  AddSubtitleComponent,
  ChooseSubtitleComponent,
  DeleteSubtitleComponent,
  LcdScreenComponent,
  MatrixLedComponent,
  ShowAddedSubtitleComponent,
  ShowSubtitleComponent,
  StartMenuComponent,
  ButDisabledDirective,
  ButHoverDirective,
  FunctionKeysDirective
],
  exports: [
    ControlProgramComponent
  ]
  })

  export class AppDisplayModule { }
