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

    public tagsA: string[];
    public tagsB: string[];

    constructor(service: CodeStoreService) {

        this._store = service.getStore();
        this.codeAsString = this._store.getState().codeAsString;

        this.tagsA = [ "awesome", "cool" ];
        this.tagsB = [ "bad", "lazy" ];
    }

    public addTagToB( newTagName: string ) : void {

        console.log('adding ' + newTagName + ' to ' + this.tagsB);
        //this.tagsB = this.tagsB.concat( newTagName );
        this._store.dispatch({type: CodeStoreService.ADD_TAG, payload: newTagName})

    }


    // I handle the "remove" event being emitted from the tags component for TagsB.
    public removeFromB( index: number ) : void {
        console.log('removing ' + this.tagsB[index] + ' from ' + this.tagsB);
        this._store.dispatch({type: CodeStoreService.REMOVE_TAG, payload: index})

/*
        this.tagsB = [
            ...this.tagsB.slice( 0, index ),
            ...this.tagsB.slice( index + 1 )
        ];
*/

    }

    ngOnInit(): void {

        console.log('ngOnInit')
        this.unsubscribeCallback = this._store.subscribe(() => {
            console.log('new data ')
            this.codeAsString = this._store.getState().codeAsString;
            this.tagsB = this._store.getState().tags;
        })
    }

    updateCode(codeAsString: string) {
        console.log('updateCode '  + codeAsString)
        this._store.dispatch(
            { type: CodeStoreService.SET_CODE,
                    payload: codeAsString})

    }

    ngOnDestroy(): void {
        this.unsubscribeCallback
        ();
    }


}
