import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { PublicModule } from './public/public.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PrivateModule } from './private/private.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PublicModule,
    PrivateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
