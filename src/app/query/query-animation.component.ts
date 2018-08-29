import {Component, OnInit} from '@angular/core';
import {animate, query, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-query-animation',
    templateUrl: './query-animation.component.html',
    styleUrls: ['./query-animation.component.css'],
    animations: [
        trigger('queryAnimation', [
            state('in', style({ opacity: 1})),
            // 入场的时候对子元素采用动画
            transition('* => goAnimate', [
                // hide the inner elements
                query('h1', style({
                    opacity: 0
                })),
                query('.content', style({
                    opacity: 0
                })),
                // 动画作用于内容元素
                query('h1', animate(1000, style({
                    opacity: 1
                }))),
                query('.content', animate(1000, style({
                    opacity: 1
                })))
            ])
        ])
    ]
})
export class QueryAnimationComponent {

}
