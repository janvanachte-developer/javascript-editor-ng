import {createReducer, on} from '@ngrx/store';
import {Rule} from "../model/rule";
import {addRule, increaseExecuted, selectRule, updateRule_OK} from "./rules.actions";

export const rulesFeatureKey = 'rules';

export interface RulesState {
    selected?: Rule;
    rules: Rule[]
}

export const rulesInitialState: RulesState = {
    rules: []
};

export const reducer = createReducer(rulesInitialState,
    on(selectRule, (state: RulesState, {id}) => {

        const newRules: Rule[] = [];

        state.rules.forEach(rule => {
                const newRule: Rule = {...rule};
                if (rule.id === id) {
                    console.log('setting rule ' + id + ' to true ');
                    newRule.active = true;
                } else {
                    newRule.active = false;
                    console.log('setting rule ' + id + ' to false ');
                }
                newRules.push(newRule);
            }
        )

        let newState = {
            rules: newRules
        };
        return newState
    }),

    on(addRule, (state: RulesState, {rule}) => {
        return ({
            rules: [...state.rules, rule]
        })
    }),

    on(updateRule_OK, (state: RulesState, {rule}) => {

        // @ts-ignore
        console.log('updateRuleOK ' + rule.rule.id + ' ' + rule.rule.name)

        const rules: Rule[] = [];
        state.rules.forEach(existing => {
                // @ts-ignore
            rules.push(existing.id === rule.rule.id ? {...rule.rule} : existing);
            }
        )

        return {
            rules: rules
        };
    }),

on(increaseExecuted, (state: RulesState, {id}) => {

        const rules: Rule[] = [];
        state.rules.forEach(existing => {
                rules.push(existing.id === id ? {...existing, executed: existing.executed > 0 ? existing.executed + 1 : 1} : existing);
            }
        )

        return {
            rules: rules
        };
    })
);
