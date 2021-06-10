import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './shared/components/components.module';
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {AppStateModule} from "./state/app-state.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HomeModule,
        AboutModule,
        AppRoutingModule,
        AppStateModule,
        ComponentsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
