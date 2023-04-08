import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';

import { PipePipe } from './pipes/pipe.pipe';
import { AComponent } from './components/a/a.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PipePipe, AComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
