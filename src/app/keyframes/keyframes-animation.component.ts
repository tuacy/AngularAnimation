import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-keyframes-animation',
    templateUrl: './keyframes-animation.component.html',
    styleUrls: ['./keyframes-animation.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            // 进场动画
            transition('void => *', [
                animate(300, keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    // 多往右边移除一点
                    style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
                ]))
            ]),
            // 出场动画
            transition('* => void', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                    style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class KeyframesAnimationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
