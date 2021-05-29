import {createReducer, on} from '@ngrx/store';
import {addTag, readFileAndUpdateCodeAsStringError, removeTag, setFilePath, updateCodeAsString} from "./code.actions";

export const codeFeatureKey = 'code';

export interface CodeState {

    filePath: string;
    codeAsString: string;
    tags: string[];
}

export const codeInitialState: CodeState = {
    tags: ['new'],
    filePath: '',
    codeAsString: "some state"
};

export const reducer = createReducer(codeInitialState,
    on(updateCodeAsString, (state, {payload}) => {
        return ({
            filePath: state.filePath,
            codeAsString: payload,
            tags: state.tags
        })
    }),
    on(setFilePath, (state, {payload}) => ({
        filePath: payload,
        codeAsString: state.codeAsString,
        tags: state.tags
    })),
    on(addTag, (state, {payload}) => ({
        filePath: state.filePath,
        codeAsString: state.codeAsString,
        tags: [...state.tags, payload]
    })),
    on(removeTag, (state, {payload}) => ({
        filePath: state.filePath,
        codeAsString: state.codeAsString,
        tags: [...state.tags.slice(0, payload), ...state.tags.slice(payload + 1)]
    })),
    on(readFileAndUpdateCodeAsStringError, (state, {payload, error}) => {
        console.error(error);
        return state;
    })
);
