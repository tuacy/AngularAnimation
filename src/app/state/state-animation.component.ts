import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-state-animation',
    templateUrl: './state-animation.component.html',
    styleUrls: ['./state-animation.component.css'],
    animations: [
        // 动画结束保留状态
        trigger('animationState', [
            state('stateA', style({
                backgroundColor: '#67ee38',
                transform: 'scale(1)'
            })),
            state('stateB', style({
                backgroundColor: '#4a302c',
                transform: 'scale(1.1)'
            })),
            transition('stateA => stateB', animate('500ms ease-in')),
            transition('stateB => stateA', animate('500ms ease-out'))
        ]),
        // 动画结束不保留状态
        trigger('animationStateNoSave', [
            transition('stateA => stateB', [
                style({
                    backgroundColor: '#4a302c',
                    transform: 'scale(1.1)'
                }),
                animate('500ms ease-in', style({
                    backgroundColor: '#67ee38',
                    transform: 'scale(1)'
                }))
            ]),
            transition('stateB => stateA', [
                style({
                    backgroundColor: '#67ee38',
                    transform: 'scale(1)'
                }),
                animate('500ms ease-in', style({
                    backgroundColor: '#4a302c',
                    transform: 'scale(1.1)'
                }))
            ])
        ])
    ]
})
export class StateAnimationComponent implements OnInit {

    state = 'stateA';
    stateNoSave = 'stateA';

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * stateA => stateB
     */
    onStateAB() {
        this.state = 'stateB';
    }

    /**
     * stateB => stateA
     */
    onStateBA() {
        this.state = 'stateA';
    }

    /**
     * stateA => stateB
     */
    onStateNoSaveAB() {
        this.stateNoSave = 'stateB';
    }

    /**
     * stateB => stateA
     */
    onStateNoSaveBA() {
        this.stateNoSave = 'stateA';
    }
}
