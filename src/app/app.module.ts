import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './shared/components/components.module';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {rootInitialState, rootMetaReducers, rootReducers} from "./state/app.reducer";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        HomeModule,
        AboutModule,
        StoreModule.forRoot(
            rootReducers,
            {
                metaReducers: rootMetaReducers,
                initialState: rootInitialState
            }),
        EffectsModule.forRoot(),
/*        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        })*/
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
