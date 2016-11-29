import {Component} from '@angular/core';
import {IBlepper} from "../interfaces/blepper";
import {BleppersService} from "../services/bleppers";
import {TranslationService} from "../services/translation";

@Component({
    selector: 'blepper-translator',
    template: `
        <div class="blepper {{blepperService.getActiveBlepper().className}}">
            <img class="blep-base" [src]="blepperService.getActiveBlepper().imageUrl">
            <img class="blep-tongue" [src]="blepperService.getActiveBlepper().tongueUrl">
        </div>
    `
})

export class BlepperTranslator {
    constructor(private blepperService:BleppersService, private translationService:TranslationService) {
    }
}