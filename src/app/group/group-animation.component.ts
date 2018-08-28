import {Component, OnInit} from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-group-animation',
    templateUrl: './group-animation.component.html',
    styleUrls: ['./group-animation.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({width: 120, transform: 'rotateX(0) translateX(0)', opacity: 1})),
            // 多个动画同时执行
            transition('* => *', [
                // 动画开始时候的样式
                style({transform: 'rotateX(0) rotateY(0) translateX(-100%) translateY(-100%)', opacity: 0}),
                group([
                    // 两个动画同时执行
                    animate('2s 0.1s ease', style({
                        transform: 'rotateX(180deg) rotateY(180deg) translateX(0) translateY(0)',
                    })),
                    animate('2s ease', style({
                        opacity: 1
                    })),
                    group([
                        // 两个动画同时执行
                        animate('2s 0.1s ease', style({
                            backgroundColor: '#4a302c',
                        }))
                    ])
                ])
            ])
        ])
    ]
})
export class GroupAnimationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
