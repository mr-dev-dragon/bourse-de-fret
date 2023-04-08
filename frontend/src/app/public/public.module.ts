import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { DateFormatPipe } from './pipes/date-format.pipe';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [DateFormatPipe, LayoutComponent ],
  imports: [CommonModule, PublicRoutingModule , SharedModule],
})
export class PublicModule {}
