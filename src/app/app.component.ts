import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('animationState', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active', style({
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class AppComponent {

    state = 'inactive';

    onChangeState() {
        if (this.state === 'inactive') {
            this.state = 'active';
        } else {
            this.state = 'inactive';
        }
    }
}
