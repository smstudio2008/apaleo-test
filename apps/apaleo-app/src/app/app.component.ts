import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `,
    ],
})
export class AppComponent {
    title = 'apaleo-app';
}
