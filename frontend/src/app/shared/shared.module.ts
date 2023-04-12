import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DarkModeComponent } from './components/dark-mode-toggle/dark-mode.component';
import { RightAsideComponent } from './components/right-aside/right-aside.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { PrimaryHeaderComponent } from './components/header/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './components/header/secondary-header/secondary-header.component';


import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    DateFormatPipe,
    DarkModeComponent,
    RightAsideComponent,
    LeftAsideComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, LazyLoadImageModule],
  exports: [
    LazyLoadImageModule,
    RightAsideComponent,
    LeftAsideComponent,
    RightAsideComponent,
    LeftAsideComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
