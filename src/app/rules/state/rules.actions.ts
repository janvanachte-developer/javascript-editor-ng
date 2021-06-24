import {createAction, props} from '@ngrx/store';
import {Rule} from "../model/rule";

const SELECT_RULE = 'SELECT_RULE';
export const selectRule = createAction(
    SELECT_RULE,
    props<{ id: string }>()
);


export const ADD_RULE = 'ADD_RULE';
export const addRule = createAction(
    ADD_RULE,
    props<{ rule: Rule }>()
);

export const UPDATE_RULE = 'UPDATE_RULE';
export const updateRule = createAction(
    UPDATE_RULE,
    props<{ rule: Rule }>()
);
export const updateRule_OK = createAction(
    'UPDATE_RULE_OK',
    props<{ rule: Rule }>()
);

export const REMOVE_RULE = 'REMOVE_RULE';
export const removeRule = createAction(
    REMOVE_RULE,
    props<{ id: string }>()
);

export const INCREASE_EXECUTED = 'INCREASE_EXECUTED';
export const increaseExecuted = createAction(
    INCREASE_EXECUTED,
    props<{ id: string }>()
);