import {Directive, Injectable} from "@angular/core";
import {CodeModel} from "./model/code.model";
import {Action} from "../../state/model/action";
import Store from "../../state/model/store";
import {Reducer} from "../../state/model/reducer";
import {Observable} from "rxjs";

const CodeStateReducer = (state: CodeModel, action: Action, store: Store<CodeModel>) => {

    console.log('Action ' + action.type + ' payload ' + action.payload);

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

        case CodeStoreService.SET_FILEPATH: {

            console.log("file " + action.payload);

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
    private _observableState: Observable<CodeModel>;
    static SET_CODE: string = 'SET_CODE';
    static ADD_TAG: string = 'ADD_TAG';
    static REMOVE_TAG = 'REMOVE_TAG';
    static SET_FILEPATH = 'SET_FILEPATH';

    constructor() {
        const reducer: Reducer<CodeModel> = CodeStateReducer;
        const initialState: CodeModel = {
            tags: ['new'],
            filePath: 'somedir/somefile.js',
            codeAsString: "some code"
        };
        this._store = new Store<CodeModel>(reducer, initialState);
        this._observableState = new Observable((observer) => {

            observer.next(initialState);
            this._store.subscribe(() =>
                observer.next(this._store.getState())
            );
        })
    }

    getStore(): Observable<CodeModel> {
        return this._observableState;
    }

    dispatch(action: Action): void {
        this._store.dispatch(action);
    }
}

export default CodeStoreService;