import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector:"dynamictab",
    template:
    `
        Content : {{content}}
    `
})
export class DyanmicTabComponent {
    @Input() content : string;

}