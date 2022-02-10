import { Component } from "@angular/core";

@Component({
    selector: 'empty12',
    template: `
        <div>This is just some empty component</div>
        <div class="some-experiment">
            <lib-notification13 [message]="messageFor13FromAppHome"></lib-notification13>
        </div>
    `
})
export class Empty12Component {
    messageFor13FromAppHome:any;
    constructor() {
        this.messageFor13FromAppHome = 'message from empty comp';
    }
}