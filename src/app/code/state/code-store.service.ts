import {Directive, Injectable} from "@angular/core";
import {CodeModel} from "./model/code.model";
import {Action} from "../../state/model/action";
import Store from "../../state/model/store";
import {Reducer} from "../../state/model/reducer";
import {Observable} from "rxjs";
import {CodeActions} from "./actions/code-actions";

const CodeStateReducer = (state: CodeModel, action: Action, store: Store<CodeModel>) => {

    console.log('Action ' + action.type + ' payload ' + action.payload);

    switch (action.type) {
        case CodeActions.SET_CODE:
            console.log('Action ' + action.type + ' payload ' + action.payload);
            return {
                filePath: state.filePath,
                codeAsString: action.payload,
                tags: state.tags
            }

        case CodeActions.SET_FILEPATH:
            console.log('Action ' + action.type + ' payload ' + action.payload);
            return {
                filePath: action.payload,
                codeAsString: state.codeAsString,
                tags: state.tags
            }

        case CodeActions.ADD_TAG:
            console.log('Action ' + action.type + ' payload ' + action.payload);
            return {
                filePath: state.filePath,
                codeAsString: state.codeAsString,
                tags: [...state.tags, action.payload]
            }

        case CodeActions.REMOVE_TAG:
            console.log('Action ' + action.type + ' payload ' + action.payload);
            return {
                filePath: state.filePath,
                codeAsString: state.codeAsString,
                tags: [...state.tags.slice(0, action.payload), ...state.tags.slice(action.payload + 1)]
            }

        case CodeActions.READ_FILE_INTO_CODE: {
            console.log("file " + action.payload);

            let codeAsString: string | ArrayBuffer = "";
            const fileReader = new FileReader();
            fileReader.onload = () => {
                codeAsString = fileReader.result;
                console.log('Content ', codeAsString);

                store.dispatch({
                    type: CodeActions.SET_CODE,
                    payload: codeAsString
                })
            }

            console.log('filereader reading ' + (<File>action.payload).name);
            fileReader.readAsText((<File>action.payload));
            console.log('filereader read ' + (<File>action.payload).name);
            return {
                filePath: (<File>action.payload).name,
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
        const initialState: CodeModel = {
            tags: ['new'],
            filePath: '',
            codeAsString: "some code"
        };
        this._store = new Store<CodeModel>(reducer, initialState);
    }

    getStore(): Observable<CodeModel> {
        return this._store;
    }

    dispatch(action: Action): void {
        this._store.dispatch(action);
    }
}

export default CodeStoreService;