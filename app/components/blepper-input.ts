import {Component} from '@angular/core';
import {TranslationService} from "../services/translation";

@Component({
    selector: 'blepper-input',
    template: `
        <form>
            <input [(ngModel)]="textInput" name="textInput">
            <button (click)="toBlep()">To Blep</button>
            <button (click)="toPlain()">To Plain</button>
        </form>
    `
})

export class BlepperInput {
    private textInput:string = "";

    constructor(private translationService:TranslationService) {

    }

    private toBlep():void {
        this.textInput = this.translationService.toBlep(this.textInput);
    }

    private toPlain():void {
        this.textInput = this.translationService.toPlain(this.textInput);
    }
}