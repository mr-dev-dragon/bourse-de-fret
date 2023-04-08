import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DarkModeComponent } from './components/dark-mode-toggle/dark-mode.component';
import { RightAsideComponent } from './components/right-aside/right-aside.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { PrimieryFooterComponent } from './components/footer/primiery-footer/primiery-footer.component';
import { SecondaryFooterComponent } from './components/footer/secondary-footer/secondary-footer.component';
import { TertiaryFooterComponent } from './components/footer/tertiary-footer/tertiary-footer.component';
import { PrimaryHeaderComponent } from './components/header/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './components/header/secondary-header/secondary-header.component';


@NgModule({
  declarations: [
    DateFormatPipe,
    DarkModeComponent,
    RightAsideComponent,
    LeftAsideComponent,
    PrimieryFooterComponent,
    SecondaryFooterComponent,
    TertiaryFooterComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    RightAsideComponent,
    LeftAsideComponent,
    RightAsideComponent,
    LeftAsideComponent,
    PrimieryFooterComponent,
    SecondaryFooterComponent,
    TertiaryFooterComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
  ],
})
export class SharedModule {}
