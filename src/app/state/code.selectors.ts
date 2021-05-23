import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from "./app.state";
import {CodeModel} from "../code/state/code.model";

export const selectCode = (state: AppState) => state.code;