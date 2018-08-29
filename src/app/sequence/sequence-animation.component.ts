import {Component, OnInit} from '@angular/core';
import {animate, sequence, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-sequence-animation',
    templateUrl: './sequence-animation.component.html',
    styleUrls: ['./sequence-animation.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'rotateX(0) translateX(0)', opacity: 1})),
            // 多个动画同时执行
            transition('void => *', sequence([
                style({
                    opacity: 0,
                }),
                animate('1s ease-in-out', style({
                        opacity: 1,
                    }
                )),
                animate('1s ease-in-out', style({
                        transform: 'rotateX(90deg)',
                    }
                )),
                animate('2s ease', style({
                    transform: 'rotateY(90deg)',
                })),
            ]))
        ])
    ]
})
export class SequenceAnimationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
