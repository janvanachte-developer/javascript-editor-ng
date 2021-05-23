import {createReducer, on} from '@ngrx/store';
import {initialState} from "./code.model";
import {addTag, removeTag, setFilePath, updateCodeAsString} from "./code.actions";

export const codeFeatureKey = 'code';


export const reducer = createReducer(initialState,
    on(updateCodeAsString, (state,{payload}) =>  {
        console.log('updateCodeAsString')
        console.log('state before ' + state.filePath + ' ' + state.tags+ ' ' + state.codeAsString)
        return ({
        filePath: state.filePath,
        codeAsString: payload,
        tags: state.tags
    })}),
    on(setFilePath, (state,{payload}) =>  ({
        filePath: payload,
        codeAsString: state.codeAsString,
        tags: state.tags
    })),
    on(addTag, (state,{payload}) =>  ({
        filePath: state.filePath,
        codeAsString: state.codeAsString,
        tags: [...state.tags, payload]
    })),
    on(removeTag, (state,{payload}) =>  ({
        filePath: state.filePath,
        codeAsString: state.codeAsString,
        tags: [...state.tags.slice(0, payload), ...state.tags.slice(payload + 1)]
    }))
);
