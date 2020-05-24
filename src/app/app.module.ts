import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ParallaxDirective} from './parallax.directive';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
