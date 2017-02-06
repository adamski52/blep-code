import {Component} from '@angular/core';
import {IBlepper} from "../interfaces/blepper.interface";
import {BleppersService} from "../services/bleppers.service";

@Component({
    selector: 'blepper-picker',
    template: `
      <select class="form-control" [(ngModel)]="selectedValue" name="selectedValue" (ngModelChange)="setActiveBlepper()">
          <option *ngFor="let blepper of bleppers" value="{{blepper.value}}">{{blepper.name}}</option>
      </select>
    `
})

export class BlepperPicker {
    private bleppers:Array<IBlepper>;
    private selectedValue:number;

    constructor(private blepperService:BleppersService) {
        this.bleppers = this.blepperService.getBleppers();
        this.selectedValue = this.blepperService.getActiveBlepper().value;
    }

    private setActiveBlepper():void {
        this.blepperService.setActiveBlepper(this.blepperService.getBlepperByValue(+this.selectedValue));
    }
}
