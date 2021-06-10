import {createReducer, on} from '@ngrx/store';
import {Rule} from "../model/rule";
import {addRule, selectRule} from "./rules.actions";

export const rulesFeatureKey = 'rules';

export interface RulesState {
    rules: Rule[]
}

export const rulesInitialState: RulesState = {
    rules: [
        {id: 'rule1', name: 'Rule 1', active: false},
        {id: 'rule2', name: 'Rule With a Longer Name', active: true},
        {id: 'rule3', name: 'Another Rule', active: false},
        {id: 'rule4', name: 'Rule 4', active: false}
    ]
};

export const reducer = createReducer(rulesInitialState,
    on(selectRule, (state, {id}) => {

        const newRules: Rule[] = [];

        state.rules.forEach( rule =>
            {
                const newRule: Rule = {...rule};
                if ( rule.id === id ) {
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
        console.log('returning state ' + JSON.stringify(newState));
        return newState
    }),

    on(addRule, (state, {rule}) => {
        return ({
            rules: [...state.rules, rule]
        })
    })
    );
