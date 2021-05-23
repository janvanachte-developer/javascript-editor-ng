import { createAction, props } from '@ngrx/store';

export const updateCodeAsString = createAction(
    'SET_CODE',
    props<{ payload: string }>()
);

export const setFilePath = createAction(
    'SET_FILEPATH',
    props<{ payload: string }>()
);

export const readFileAndUpdateCodeAsString = createAction(
    'READ_FILE_INTO_CODE',
    props<{ payload: File }>()
);

export const readFileAndUpdateCodeAsStringError = createAction(
    'READ_FILE_INTO_CODE_ERROR',
    props<{ payload: File }>()
);

export const addTag = createAction(
    'ADD_TAG',
    props<{ payload: string }>()
);

export const removeTag = createAction(
    'REMOVE_TAG',
    props<{ payload: number }>()
);