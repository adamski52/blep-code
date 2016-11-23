import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../components/app';
import {BlepperPicker} from "../components/blepper-picker";
import {BleppersService} from "../services/bleppers";
import {BlepperTranslator} from "../components/blepper-translator";
import {TranslationService} from "../services/translation";
import {BlepperInput} from "../components/blepper-input";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, BlepperPicker, BlepperTranslator, BlepperInput],
    providers: [BleppersService, TranslationService],
    bootstrap: [AppComponent]
})
export class AppModule {}
