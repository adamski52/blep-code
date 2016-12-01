import {Component} from '@angular/core';
import {IBlepper} from "../interfaces/blepper";
import {BleppersService} from "../services/bleppers";

@Component({
    selector: 'blepper-picker',
    template: `
        <form class="col-xs-12">
            <select class="form-control" [(ngModel)]="selectedValue" name="selectedValue" (ngModelChange)="setActiveBlepper()">
                <option *ngFor="let blepper of bleppers" value="{{blepper.value}}">{{blepper.name}}</option>
            </select>
        </form>
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