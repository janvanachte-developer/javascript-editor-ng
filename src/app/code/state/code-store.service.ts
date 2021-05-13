import {Injectable} from "@angular/core";
import {CodeModel} from "./model/code.model";
import {Action} from "../../state/model/action";
import Store from "../../state/model/store";
import {Reducer} from "../../state/model/reducer";

const CodeStateReducer = (state: CodeModel, action: Action) => {

    console.log('Action ' + action.type +  ' payload ' + action.payload);

    switch (action.type) {
        case CodeStoreService.SET_CODE:
            return {
                filePath: state.filePath,
                codeAsString: action.payload + ';',
                tags: state.tags
            }

        case CodeStoreService.ADD_TAG:
            return {
                filePath: state.filePath,
                codeAsString: state.codeAsString,
                tags: [...state.tags, action.payload]
            }

        case CodeStoreService.REMOVE_TAG:
            return {
                filePath: state.filePath,
                codeAsString: state.codeAsString,
                tags: [...state.tags.slice(0, action.payload), ...state.tags.slice(action.payload + 1)]
            }
    }

    return state;
}

@Injectable()
class CodeStoreService {

    private _store: Store<CodeModel>;
    static SET_CODE: string = 'SET_CODE';
    static ADD_TAG: string = 'ADD_TAG';
    static REMOVE_TAG = 'REMOVE_TAG';

    constructor() {
        const reducer: Reducer<CodeModel> = CodeStateReducer;
        const initialState: CodeModel = {
            tags: ['new'],
            filePath: 'somedir/somefile.js',
            codeAsString: "some code"
        };
        this._store = new Store<CodeModel>(reducer, initialState)
    }

    getStore(): Store<CodeModel> {
        return this._store;
    }
}

export default CodeStoreService;