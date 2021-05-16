import {Component, OnDestroy, OnInit} from '@angular/core';
import CodeStoreService from "../../state/code-store.service";
import {CodeModel} from "../../state/model/code.model";
import {Subscription} from "rxjs";
import {CodeActions} from "../../state/actions/code-actions";

@Component({
    selector: 'app-code-editing',
    templateUrl: './code-editing.component.html',
    styleUrls: ['./code-editing.component.css']
})
export class CodeEditingComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    code: CodeModel;
    codeAsString: string;
    tags: string[];

    tagsWith2WayBinding: string[];

    constructor(private _service: CodeStoreService) {
        this.tagsWith2WayBinding = [ "awesome", "cool" ];
    }

    ngOnInit(): void {

        console.log('ngOnInit');
        this.subscription = this._service.getStore().subscribe((next) => {
            console.log('new data ')
            this.code = next;
            this.codeAsString = next.codeAsString;
            this.tags = next.tags;
        })
    }

    updateCode(codeAsString: string) {
        console.log('updateCode ' + codeAsString)
        this._service.dispatch(
            CodeActions.updateCodeAsString(codeAsString))
    }

    changeFile(file: any) {
        console.log('changeFile ' + file)
        this._service.dispatch(
            CodeActions.readFileAndUpdateCodeAsString(file))
    }

    addTag(newTagName: string): void {
        console.log('adding ' + newTagName + ' to ' + this.tags);
        //this.tags = this.tags.concat( newTagName );
        this._service.dispatch(CodeActions.addTag(newTagName))
    }

    // I handle the "remove" event being emitted from the tags component for TagsB.
    removeTag(index: number): void {
        console.log('removing ' + this.tags[index] + ' from ' + this.tags);
        this._service.dispatch(CodeActions.removeTag(index))
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
