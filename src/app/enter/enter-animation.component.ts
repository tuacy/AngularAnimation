import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-enter-animation',
    templateUrl: './enter-animation.component.html',
    styleUrls: ['./enter-animation.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({opacity: 1, transform: 'translateX(0) scale(1)'})),
            // 进场动画
            transition('void => *', [
                style({opacity: 0, transform: 'translateX(-100%) scale(0)'}),
                animate(500)
            ]),
            // 出场动画
            transition('* => void', [
                animate(500, style({opacity: 0, transform: 'translateX(100%) scale(0)'}))
            ])
        ])
    ]
})
export class EnterAnimationComponent implements OnInit {

    show = true;
    list = ['第一个item', '第一个item', '第一个item'];

    constructor() {
    }

    ngOnInit() {
    }

    onEnterOuterSwitch() {
        this.show = !this.show;
    }
}
