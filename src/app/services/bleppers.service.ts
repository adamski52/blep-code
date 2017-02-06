import {Injectable} from '@angular/core';
import {IBlepper} from "../interfaces/blepper.interface";

@Injectable()
export class BleppersService {
    private bleppers:Array<IBlepper> = [{
        value: 0,
        name: "Franklin",
        active: true,
        imageUrl: "assets/img/freon.png",
        tongueUrl: "assets/img/freon-tongue.png",
        className: "theme-franklin"
    }, {
        value: 1,
        name: "Aslan",
        active: false,
        imageUrl: "assets/img/aslan.png",
        tongueUrl: "assets/img/aslan-tongue.png",
        className: "theme-aslan"
    }, {
        value: 2,
        name: "Zelda",
        active: false,
        imageUrl: "assets/img/zelda.png",
        tongueUrl: "assets/img/zelda-tongue.png",
        className: "theme-zelda"
    }];

    public getBleppers():Array<IBlepper> {
        return this.bleppers;
    }

    public getBlepperByValue(value:number):IBlepper|undefined {
        for(let b of this.bleppers) {
            if(b.value === value) {
                return b;
            }
        }
    }

    public setActiveBlepper(blepper:IBlepper):void {
        for (let b of this.bleppers) {
            b.active = b.value === blepper.value
        }
    }

    public getActiveBlepper():IBlepper|undefined {
        for (let b of this.bleppers) {
            if(b.active) {
                return b;
            }
        }
    }
}
