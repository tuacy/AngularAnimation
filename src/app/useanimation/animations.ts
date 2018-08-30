import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

// 封装动画1
const inAnimation = animation([
    style({
        opacity: '{{ start }}',
        transform: 'translateX(-100%)'
    }),
    animate('{{ time }}',
        style({
            opacity: '{{ end }}',
            transform: 'translateX(0)'
        }))
], {params: {time: '1000ms', start: 0, end: 1}});

// 封装动画2
const outAnimation = animation([
    style({
        opacity: '{{ start }}',
        transform: 'translateX(0)'
    }),
    animate('{{ time }}',
        style({
            opacity: '{{ end }}',
            transform: 'translateX(-100%)'
        }))
], {params: {time: '1000ms', start: 0, end: 1}});


// 如下面我定一个动效用到上面封装的动画
export const routerEnterLeave = trigger('fadel', [
    // 入场
    transition(':enter', [
        useAnimation(inAnimation, {
            params: {
                time: '2s',
                start: 0,
                end: 1
            }
        })
    ]),
    // 出场
    transition(':leave', [
        useAnimation(outAnimation, {
            params: {
                time: '2s',
                start: 1,
                end: 0
            }
        })
    ])
]);
