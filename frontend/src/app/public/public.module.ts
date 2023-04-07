import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AComponent } from './components/a/a.component';
import { DateFormatPipe } from './pipes/date-format.pipe';



@NgModule({
  declarations: [AComponent, DateFormatPipe],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
