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

export const removeRule = createAction(
    'REMOVE_RULE',
    props<{ id: string }>()
);
