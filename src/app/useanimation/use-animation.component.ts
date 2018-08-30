import {Component, HostBinding, OnInit} from '@angular/core';
import {routerEnterLeave} from './animations';

@Component({
    selector: 'app-use-animation',
    templateUrl: './use-animation.component.html',
    styleUrls: ['./use-animation.component.css'],
    animations: [
        // 动画结束保留状态
        routerEnterLeave,
    ]
})
export class UseAnimationComponent implements OnInit {

    // 这里我们把动画加载路由上
    // @HostBinding 属性添加到类中以设置这个路由组件元素的动画和样式
    @HostBinding('@fadel') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    constructor() {
    }

    ngOnInit() {
    }

}
