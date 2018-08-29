import {Component, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-stagger-animation',
    templateUrl: './stagger-animation.component.html',
    styleUrls: ['./stagger-animation.component.css'],
    animations: [
        trigger('listAnimation', [
            transition('* => *', [ // each time the binding value changes
                query(':leave', [
                    // 所有子元素出场动画
                    style({opacity: 1}),
                    stagger(100, [
                        animate('0.5s', style({opacity: 0}))
                    ])
                ]),
                query(':enter', [
                    // 所有子元素入场动画
                    style({opacity: 0}),
                    stagger(100, [
                        animate('0.5s', style({opacity: 1}))
                    ])
                ])
            ])
        ])]
})
export class StaggerAnimationComponent {

    items = [];

    showItems() {
        this.items = [
            0,
            1,
            2,
            3,
            4
        ];
    }

    hideItems() {
        this.items = [];
    }

    toggle() {
        this.items.length ? this.hideItems() : this.showItems();
    }

}
