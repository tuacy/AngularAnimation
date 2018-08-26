import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
