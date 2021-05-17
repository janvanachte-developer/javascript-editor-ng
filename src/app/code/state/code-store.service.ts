import {Directive, Injectable} from "@angular/core";
import {CodeModel} from "./model/code.model";

import {Observable} from "rxjs";
import {Action, Reducer, Store, createStore} from "redux";
import {
    AddTagAction, CodeActions,
    ReadFileAndUpdateCodeAsStringAction,
    RemoveTagAction, SetFilePathAction,
    UpdateCodeAsStringAction
} from "./actions/code-actions";

const initialState: CodeModel = {
    tags: ['new'],
    filePath: '',
    codeAsString: "some code"
};

const CodeStateReducer:Reducer<CodeModel> = (state: CodeModel = initialState, action: Action) => {

    console.log('Action ' + action.type );

    switch (action.type) {
        case CodeActions.SET_CODE:
            return {
                filePath: state.filePath,
                codeAsString: (<UpdateCodeAsStringAction>action).payload ,
                tags: state.tags
            }

        case CodeActions.SET_FILEPATH:
            return {
                filePath: (<SetFilePathAction>action).payload,
                codeAsString: state.codeAsString
                tags: state.tags
            }

        case CodeActions.ADD_TAG:
            return {
                filePath: state.filePath,
                codeAsString: state.codeAsString,
                tags: [...state.tags, (<AddTagAction>action).payload]
            }

        case CodeActions.REMOVE_TAG:
            return {
                filePath: state.filePath,
                codeAsString: state.codeAsString,
                tags: [...state.tags.slice(0, (<RemoveTagAction>action).payload), ...state.tags.slice(action.payload + 1)]
            }

        case CodeActions.READ_FILE_INTO_CODE: {

            let codeAsString: string | ArrayBuffer = "";
            const fileReader = new FileReader();
            fileReader.onload = () => {
                codeAsString = fileReader.result;
                console.log('Content ', codeAsString);

                store.dispatch({
                    type: CodeStoreService.SET_CODE,
                    payload: codeAsString
                })
            }

            console.log('filereader reading ' + (<File>(<ReadFileAndUpdateCodeAsStringAction>action).payload).name);
            fileReader.readAsText((<File>(<ReadFileAndUpdateCodeAsStringAction>action).payload));
            console.log('filereader read ' + (<File>(<ReadFileAndUpdateCodeAsStringAction>action).payload).name);
            return {
                filePath: (<File>(<ReadFileAndUpdateCodeAsStringAction>action).payload).name,
                codeAsString: state.codeAsString,
                tags: state.tags
            }
        }
    }

    return state;
}

@Injectable()
class CodeStoreService {

    private _store: Store<CodeModel>;

    constructor() {
        const reducer: Reducer<CodeModel> = CodeStateReducer;

        this._store = createStore<CodeModel, Action, >(reducer);
    }

    getStore(): Observable<CodeModel> {
        return this._store;
    }

    dispatch(action: Action): void {
        this._store.dispatch(action);
    }
}

export default CodeStoreService;