import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RulesComponent} from './rules.component';
import {RuleComponent} from "./containers/rule/rule/rule.component";
import {RulesCardsComponent} from "./component/rules-cards/rules-cards.component";
import {RuleSideMenuComponent} from "./navigation/side-menu/side-menu.component";

const routes: Routes = [
    {
        path: '',
        component: RulesComponent,
        children: [
            {path: '', component: RulesCardsComponent},
            {
                path: ':id',
                component: RuleComponent,
                children: [
                    {
                        path: '',
                        outlet: 'sidemenu',
                        component: RuleSideMenuComponent
                    },
                    {
                        path: ':id',
                        outlet: 'sidemenu',
                        component: RuleSideMenuComponent
                    }
                ]
            },
            {path: ':id/metadata', component: RuleComponent},
            {path: ':id/code', component: RuleComponent}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RulesRoutingModule {
}
