import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducer, rulesFeatureKey} from "./rules.reducer";
import {RulesEffects} from "./rules.effects";
import RulesStateService from "./rules-state.service";

@NgModule({
    declarations: [],
    imports: [
        EffectsModule.forFeature([RulesEffects]),
        StoreModule.forFeature(rulesFeatureKey, reducer)
    ],
    providers: [
        RulesStateService
    ]
})
export class RulesStateModule {
}
