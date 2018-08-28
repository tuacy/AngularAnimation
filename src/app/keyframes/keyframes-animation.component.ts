import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-keyframes-animation',
    templateUrl: './keyframes-animation.component.html',
    styleUrls: ['./keyframes-animation.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            // keyframes多阶段动画(任何状态切换的时候都使用该动画)
            transition('* => *', [
                animate(1000, keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    // 多往右边移除一点
                    style({opacity: 1, transform: 'translateX(50%)', offset: 0.5}),
                    style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
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
