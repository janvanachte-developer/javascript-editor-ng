import {Component, OnDestroy, OnInit} from '@angular/core';
import CodeStoreService from "../../state/code-store.service";
import Store, {UnsubscribeCallback} from "../../../state/model/store";
import {CodeModel} from "../../state/model/code.model";

@Component({
    selector: 'app-code-editing',
    templateUrl: './code-editing.component.html',
    styleUrls: ['./code-editing.component.css']
})
export class CodeEditingComponent implements OnInit, OnDestroy {
    codeAsString: string;
    _store: Store<CodeModel>;
    private unsubscribeCallback: UnsubscribeCallback;

    constructor(service: CodeStoreService) {

        this._store = service.getStore();
        this.codeAsString = this._store.getState().codeAsString;
    }

    ngOnInit(): void {

        console.log('ngOnInit')
        this.unsubscribeCallback = this._store.subscribe(() => {
            console.log('new data ' +  this._store.getState().codeAsString)
            this.codeAsString = this._store.getState().codeAsString;
        })
    }

    updateCode(codeAsString: string) {
        this._store.dispatch({ type: CodeStoreService.SET_CODE,
        payload: codeAsString})

    }

    ngOnDestroy(): void {
        this.unsubscribeCallback
        ();
    }
}
