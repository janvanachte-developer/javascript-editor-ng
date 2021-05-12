import {Injectable} from "@angular/core";
import {CodeModel} from "./model/code.model";
import {Action} from "../../state/model/action";
import Store from "../../state/model/store";
import {Reducer} from "../../state/model/reducer";

const CodeStateReducer = (state: CodeModel, action: Action) => {

    switch (action.type) {
        case CodeStoreService.SET_CODE:
            return {
                filePath: state.filePath,
                codeAsString: action.payload + 'AAAA'
            }
    }

    return state;
}

@Injectable()
class CodeStoreService {

    private _store: Store<CodeModel>;
    static SET_CODE: 'SET_CODE';

    constructor() {
        const reducer: Reducer<CodeModel> = CodeStateReducer;
        const initialState: CodeModel = {
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