import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {readFileAndUpdateCodeAsString, updateCodeAsString} from "./code.actions";
import {map, switchMap} from "rxjs/operators";
import {FileReadService} from "../file/file-read.service";

@Injectable()
export class CodeEffects {

    constructor(private actions$: Actions, private fileReadService: FileReadService) {
    }

    readFileAndUpdateCodeAsString$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(readFileAndUpdateCodeAsString),
            switchMap(action =>
                {
                    return this.fileReadService.readFileToString(action.payload).pipe(
                    map(codeAsString => {
                        return updateCodeAsString({payload: codeAsString})})
                   // , catchError((error) => Observable.of(readFileAndUpdateCodeAsStringError({payload: error}))
                )}
            )
        )
    })
}