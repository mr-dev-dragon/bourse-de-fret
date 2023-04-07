import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { AComponent } from './components/a/a.component';


@NgModule({
  declarations: [
    DateFormatPipe,
    AComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
