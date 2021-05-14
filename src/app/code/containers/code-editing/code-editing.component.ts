import {Component, OnDestroy, OnInit} from '@angular/core';
import CodeStoreService from "../../state/code-store.service";
import {CodeModel} from "../../state/model/code.model";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-code-editing',
    templateUrl: './code-editing.component.html',
    styleUrls: ['./code-editing.component.css']
})
export class CodeEditingComponent implements OnInit, OnDestroy {

    private unsubscribeCallback: Subscription;

    code: CodeModel;

    codeAsString: string;
    public tagsA: string[];
    public tagsB: string[];

    constructor(private _service: CodeStoreService) {
        this.tagsA = [ "awesome", "cool" ];
    }

    public addTagToB(newTagName: string): void {

        console.log('adding ' + newTagName + ' to ' + this.tagsB);
        //this.tagsB = this.tagsB.concat( newTagName );
        this._service.dispatch({type: CodeStoreService.ADD_TAG, payload: newTagName})

    }


    // I handle the "remove" event being emitted from the tags component for TagsB.
    public removeFromB(index: number): void {
        console.log('removing ' + this.tagsB[index] + ' from ' + this.tagsB);
        this._service.dispatch({type: CodeStoreService.REMOVE_TAG, payload: index})

        /*
                this.tagsB = [
                    ...this.tagsB.slice( 0, index ),
                    ...this.tagsB.slice( index + 1 )
                ];
        */

    }

    ngOnInit(): void {

        console.log('ngOnInit');
        this.unsubscribeCallback = this._service.getStore().subscribe((next) => {
            console.log('new data ')
            this.code = next;
            this.codeAsString = next.codeAsString;
            this.tagsB = next.tags;
        })
    }

    updateCode(codeAsString: string) {
        console.log('updateCode ' + codeAsString)
        this._service.dispatch(
            {
                type: CodeStoreService.SET_CODE,
                payload: codeAsString
            })
    }

    ngOnDestroy(): void {
        this.unsubscribeCallback.unsubscribe();
    }


    changeFile(file: any) {
        console.log('changeFile ' + file)
        this._service.dispatch(
            {
                type: CodeStoreService.SET_FILEPATH,
                payload: file
            })
    }
}
