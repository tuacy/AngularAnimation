import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StateAnimationComponent} from './state/state-animation.component';
import {EnterAnimationComponent} from './enter/enter-animation.component';
import {KeyframesAnimationComponent} from './keyframes/keyframes-animation.component';
import {GroupAnimationComponent} from './group/group-animation.component';
import {CallbackAnimationComponent} from './callback/callback-animation.component';


const appRoutes: Routes = [
    {
        path: 'state',
        component: StateAnimationComponent
    },
    {
        path: 'enter',
        component: EnterAnimationComponent
    },
    {
        path: 'keyframes',
        component: KeyframesAnimationComponent
    },
    {
        path: 'group',
        component: GroupAnimationComponent
    },
    {
        path: 'callback',
        component: CallbackAnimationComponent
    },
    {path: '', redirectTo: '/state', pathMatch: 'full'},
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    declarations: [
        StateAnimationComponent,
        EnterAnimationComponent,
        KeyframesAnimationComponent,
        GroupAnimationComponent,
        CallbackAnimationComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
