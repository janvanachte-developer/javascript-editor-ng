import {Component, OnDestroy, OnInit} from '@angular/core';
import CodeStateService from "../../state/code-state.service";
import {Subscription} from "rxjs";
import {readFileAndUpdateCodeAsString, updateCodeAsString, addTag, removeTag} from "../../state/code.actions";
import {CodeState} from "../../state/code.reducer";

@Component({
    selector: 'app-code-editing',
    templateUrl: './code-editing.component.html',
    styleUrls: ['./code-editing.component.css']
})
export class CodeEditingComponent implements OnInit, OnDestroy {

    private state: CodeState;
    private stateSubscription: Subscription;

    tags: string[];
    codeAsString: string;

    tagsWith2WayBinding: string[];

    constructor(private _service: CodeStateService) {
        this.tagsWith2WayBinding = ["awesome", "cool"];
    }

    ngOnInit(): void {
        this.stateSubscription = this._service.getState().subscribe((next) => {
            this.state = next;
            this.tags = this.state.tags;
            this.codeAsString = this.state.codeAsString;
        })
    }

    updateCode(codeAsString: string) {
        this._service.dispatch(
            updateCodeAsString({payload: codeAsString})
        )
    }

    changeFile(file: any) {
        this._service.dispatch(
            readFileAndUpdateCodeAsString({payload: file})
        )
    }

    addTag(newTagName: string): void {
        this._service.dispatch(
            addTag({payload: newTagName})
        )
    }

    // I handle the "remove" event being emitted from the tags component for TagsB.
    removeTag(index: number): void {
        this._service.dispatch(
            removeTag({payload: index})
        )
    }

    ngOnDestroy(): void {
        this.stateSubscription.unsubscribe();
    }
}
