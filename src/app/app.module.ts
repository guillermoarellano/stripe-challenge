import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelInputComponent } from './tel-input/tel-input.component';
import { PhoneMaskDirective } from './phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    TelInputComponent,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
