import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {HttpModule} from "@angular/http";
import {EddbService} from "./eddb.service";

@NgModule({
    imports     : [BrowserModule, HttpModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent],
    providers   : [EddbService]
})
export class AppModule {
}
