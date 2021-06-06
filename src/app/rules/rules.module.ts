import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesComponent} from './rules.component';
import {RuleEditingComponent} from './containers/rule-editing/rule-editing.component';
import {RuleComponent} from './containers/rule/rule/rule.component';
import {RuleExecutionComponent} from './containers/rule-execution/rule-execution.component';
import {RulesTabsComponent} from './navigation/tabs/tabs.component';
import {RulesCardsComponent} from './component/rules-cards/rules-cards.component';
import {RuleSideMenuComponent} from './navigation/side-menu/side-menu.component';


@NgModule({
  declarations: [
    RulesComponent,
    RuleEditingComponent,
    RuleComponent,
    RuleExecutionComponent,
    RulesCardsComponent,
    RulesTabsComponent,
    RuleSideMenuComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
