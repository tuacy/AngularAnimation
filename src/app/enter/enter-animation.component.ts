import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-enter-animation',
    templateUrl: './enter-animation.component.html',
    styleUrls: ['./enter-animation.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            // 进场动画
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(500)
            ]),
            // 出场动画
            transition('* => void', [
                animate(500, style({transform: 'translateX(100%)'}))
            ])
        ]),
        trigger('scaleInOut', [
            state('in', style({transform: 'translateX(0)'})),
            // 进场动画
            transition('void => *', [
                style({transform: 'translateX(-100%) scale(0)'}),
                animate(500)
            ]),
            // 出场动画
            transition('* => void', [
                animate(500, style({transform: 'translateX(100%) scale(0)'}))
            ])
        ]),
        trigger('opacityInOut', [
            // 进场动画
            transition('void => *', [
                style({opacity: 0, transform: 'translateX(-100%) scale(0)'}),
                animate(500)
            ]),
            // 出场动画
            transition('* => void', [
                animate(500, style({transform: 'translateX(100%) scale(0)'}))
            ])
        ])
    ]
})
export class EnterAnimationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
