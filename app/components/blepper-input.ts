import {Component} from '@angular/core';
import {TranslationService} from "../services/translation";

@Component({
    selector: 'blepper-input',
    template: `
        <form class="blepper-form">
            <input class="blepper-input" [(ngModel)]="textInput" name="textInput">
            <button class="blepper-button" (click)="toBlep()">To Blep</button>
            <button class="blepper-button" (click)="toPlain()">To Plain</button>
            <button class="blepper-button" (click)="blep()">Blep</button>
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

    private blep():void {
        
    }
}