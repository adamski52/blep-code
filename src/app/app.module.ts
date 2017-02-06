import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BlepperTranslator} from "./components/blepper-translator.component";
import {BlepperPicker} from "./components/blepper-picker.component";
import {BlepperInput} from "./components/blepper-input.component";
import {BleppersService} from "./services/bleppers.service";
import {TranslationService} from "./services/translation.service";

@NgModule({
  declarations: [
    AppComponent,
    BlepperTranslator,
    BlepperPicker,
    BlepperInput
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BleppersService,
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
