import {Component, OnInit} from '@angular/core';
import {animate, animateChild, animation, query, style, transition, trigger, useAnimation} from '@angular/animations';

@Component({
    selector: 'app-child-animation',
    templateUrl: './child-animation.component.html',
    styleUrls: ['./child-animation.component.css'],
    animations: [
        trigger('parentAnimation', [
            transition('false => true', [
                // 查找parentAnimation对应element里面的header标签执行动画
                query('header', [
                    style({opacity: 0}),
                    animate(500, style({opacity: 1}))
                ]),
                query('@childAnimation', [
                    animateChild()
                ])
            ])
        ]),
        trigger('childAnimation', [
            transition('false => true', [
                style({opacity: 0}),
                animate(500, style({opacity: 1}))
            ])/*,
            useAnimation(fadeAnimation, {
                params: {
                    time: '2s',
                    start: 1,
                    end: 0
                }
            })*/
        ])
    ]
})
export class ChildAnimationComponent {

    exp = false;

    fadeAnimation = animation([
        style({opacity: '{{ start }}'}),
        animate('{{ time }}',
            style({opacity: '{{ end }}'})
        )
    ], {params: {time: '1000ms', start: 0, end: 1}});

}
