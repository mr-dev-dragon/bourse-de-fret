import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DarkModeComponent } from './components/dark-mode-toggle/dark-mode.component';


@NgModule({
  declarations: [
    DateFormatPipe,
    DarkModeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
  ,exports: [
    DarkModeComponent
    
  ]
})
export class SharedModule { }
