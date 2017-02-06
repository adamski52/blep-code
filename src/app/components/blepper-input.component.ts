import {Component} from '@angular/core';
import {TranslationService} from "../services/translation.service";

@Component({
    selector: 'blepper-input',
    template: `
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-small btn-primary" (click)="toPlain()">To Plain</button>
          </div>
          <input type="text" class="form-control" placeholder="blep or text" [(ngModel)]="textInput" name="textInput">
          <div class="input-group-btn">
            <button class="btn btn-small btn-primary" (click)="toBlep()">To Blep</button>
          </div>
        </div>
    `
})

export class BlepperInput {
    private textInput:string = "what is 4?";
    private WORD_END_MS:number = 500;
    private LETTER_END_MS:number = 300;
    private DOT_MS:number = 100;
    private DASH_MS:number = 2000;
    private CHAR_MS:number = 100;

    constructor(private translationService:TranslationService) {}

    private toBlep():void {
        this.textInput = this.translationService.toBlep(this.textInput);
        this.blep();
    }

    private toPlain():void {
        this.textInput = this.translationService.toPlain(this.textInput);
    }

    private blep():void {
        var words:string[] = this.textInput.split(" / "),
            actions:number[] = [];

        for(let word of words) {
            for(let letter of word.split(" ")) {
                for(let char of letter.split("")) {
                  if (char === ".") {
                    actions.push(this.DOT_MS);
                  }
                  else if (char === ".") {
                    actions.push(this.DASH_MS);
                  }
                }
                actions.push(this.LETTER_END_MS);
            }
            actions.push(this.WORD_END_MS);
        }

        this.run(actions);
    }

    private run(actions:number[]):void {
      if(actions.length) {
        let delay:number = actions.shift();
        this.translationService.setVisible(true);
        setTimeout(() => {
          this.translationService.setVisible(false);
          setTimeout(() => {
            this.run(actions);
          }, this.CHAR_MS);
        }, delay);
      }
    }
}
