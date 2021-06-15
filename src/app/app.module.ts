import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './shared/components/components.module';
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {AppStateModule} from "./state/app-state.module";
import {AppMonitoringModule} from "./monitoring/app-monitoring.module";
import {LoggerService} from "./monitoring/log/logger.service";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppMonitoringModule,

        HomeModule,
        AboutModule,
        ComponentsModule,

        AppRoutingModule,
        AppStateModule,

        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private logger: LoggerService) {
        logger.debug('AppModule created');
    }

}
