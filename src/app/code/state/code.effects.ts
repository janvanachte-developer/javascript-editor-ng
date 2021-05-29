import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {readFileAndUpdateCodeAsString, readFileAndUpdateCodeAsStringError, updateCodeAsString} from "./code.actions";
import {switchMap} from "rxjs/operators";
import {FileReadService} from "../file/file-read.service";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable()
export class CodeEffects {

    constructor(private actions$: Actions, private fileReadService: FileReadService) {
    }

    readFileAndUpdateCodeAsString$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(readFileAndUpdateCodeAsString),
            switchMap(action => {
                return fromPromise(this.fileReadService.readAsTextPromise(action.payload)
                    .then(codeAsString => updateCodeAsString({payload: codeAsString}))
                    .catch(error => readFileAndUpdateCodeAsStringError({payload: action.payload, error: error}))
                )
            }))
    })
}