import {Component} from '@angular/core';
import {BleppersService} from "../services/bleppers.service";
import {TranslationService} from "../services/translation.service";

@Component({
    selector: 'blepper-translator',
    template: `
        <div class="blepper {{blepperService.getActiveBlepper().className}}">
            <img class="blep-base" [src]="blepperService.getActiveBlepper().imageUrl">
            <img class="blep-tongue" [src]="blepperService.getActiveBlepper().tongueUrl" [hidden]="translationService.getVisible()">
        </div>
    `
})

export class BlepperTranslator {
    constructor(private blepperService:BleppersService, private translationService:TranslationService) {}
}
