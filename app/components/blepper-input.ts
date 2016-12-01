import {Component} from '@angular/core';
import {TranslationService} from "../services/translation";

@Component({
    selector: 'blepper-input',
    template: `
        <form class="row">
            <div class="col-xs-4">
                <button class="btn btn-small btn-primary form-control-fill" (click)="toBlep()">To Blep</button>
            </div>
            <div class="col-xs-4">
                <input class="form-control form-control-fill"  placeholder="blep or text" [(ngModel)]="textInput" name="textInput">
            </div>
            <div class="col-xs-4">
                <button class="btn btn-small btn-primary form-control-fill" (click)="toPlain()">To Plain</button>
            </div>
        </form>
    `
})

export class BlepperInput {
    private textInput:string = "what is 4?";

    constructor(private translationService:TranslationService) {

    }

    private toBlep():void {
        this.textInput = this.translationService.toBlep(this.textInput);
        this.blep();
    }

    private toPlain():void {
        this.textInput = this.translationService.toPlain(this.textInput);
    }

    private blep():void {
        var msg:string[] = this.textInput.split(" "),
            delay:number;

        for(var letter of msg) {
            for(var i of letter.split("")) {
                // do stuff
            }
        }

    }
}