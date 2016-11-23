import {Injectable} from '@angular/core';

@Injectable()
export class TranslationService {
    private MAP:Array<{plain: string, blep: string}> = [{
        plain: "A",
        blep: ".-"
    }, {
        plain: "B",
        blep: "-..."
    }, {
        plain: "C",
        blep: "-.-."
    }, {
        plain: "D",
        blep: "-.."
    }, {
        plain: "E",
        blep: "."
    }, {
        plain: "F",
        blep: "..-."
    }, {
        plain: "G",
        blep: "--."
    }, {
        plain: "H",
        blep: "...."
    }, {
        plain: "I",
        blep: ".."
    }, {
        plain: "J",
        blep: ".---"
    }, {
        plain: "K",
        blep: "-.-"
    }, {
        plain: "L",
        blep: ".-.."
    }, {
        plain: "M",
        blep: "--"
    }, {
        plain: "N",
        blep: "-."
    }, {
        plain: "O",
        blep: "---"
    }, {
        plain: "P",
        blep: ".--."
    }, {
        plain: "Q",
        blep: "--.-"
    }, {
        plain: "R",
        blep: ".-."
    }, {
        plain: "S",
        blep: "..."
    }, {
        plain: "T",
        blep: "-"
    }, {
        plain: "U",
        blep: "..-"
    }, {
        plain: "V",
        blep: "..-"
    }, {
        plain: "W",
        blep: ".--"
    }, {
        plain: "X",
        blep: "-..-"
    }, {
        plain: "Y",
        blep: "-.--"
    }, {
        plain: "Z",
        blep: "--.."
    }, {
        plain: "1",
        blep: ".----"
    }, {
        plain: "2",
        blep: "..---"
    }, {
        plain: "3",
        blep: "...--"
    }, {
        plain: "4",
        blep: "....-"
    }, {
        plain: "5",
        blep: "....."
    }, {
        plain: "6",
        blep: "-...."
    }, {
        plain: "7",
        blep: "--..."
    }, {
        plain: "8",
        blep: "---.."
    }, {
        plain: "9",
        blep: "----."
    }, {
        plain: "0",
        blep: "-----"
    }, {
        plain: " ",
        blep: "/"
    }, {
        plain: "",
        blep: " "
    }];

    private translateCharToBlep(char:string):string {
        char = char.toUpperCase();
        for(let l of this.MAP) {
            if(l.plain === char) {
                return l.blep;
            }
        }
        return char;
    }

    private translateBlepToChar(char:string):string {
        for(let l of this.MAP) {
            if(l.blep === char) {
                return l.plain;
            }
        }

        return char;
    }

    //          ee ee => . . / . .
    public toBlep(plain:string):string {
        var chars:Array<string> = plain.split(""),
            blep:Array<string> = [];

        for(let c of chars) {
            blep.push(this.translateCharToBlep(c) + " ");
        }

        return blep.join("");
    }

    //        . . / . . => ee ee
    public toPlain(blep:string):string {
        var chars:Array<string> = blep.split(" "),
            plain:Array<string> = [];

        for(let c of chars) {
            plain.push(this.translateBlepToChar(c));
        }

        return plain.join("");
    }
}