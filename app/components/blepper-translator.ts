import {Component} from '@angular/core';
import {IBlepper} from "../interfaces/blepper";
import {BleppersService} from "../services/bleppers";
import {TranslationService} from "../services/translation";

@Component({
    selector: 'blepper-translator',
    template: `
        <div class="{{blepperService.getActiveBlepper().className}}">
            <div class="blepper-wrapper">
                <div class="blepper-image">
                    <div class="blepper-tongue"></div>
                </div>
            </div>
        </div>
    `
})

export class BlepperTranslator {
    constructor(private blepperService:BleppersService, private translationService:TranslationService) {
    }
}