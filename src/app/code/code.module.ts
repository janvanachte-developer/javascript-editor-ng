import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeEditingComponent} from "./containers/code-editing/code-editing.component";
import {ComponentsModule} from "../shared/components/components.module";
import CodeStoreService from "./state/code-store.service";
import {CodeMetadataComponent} from "./components/code-matadata/code-metadata.component";
import { EffectsModule } from '@ngrx/effects';
import { CodeEffects } from './state/code.effects';
import { StoreModule } from '@ngrx/store';
import * as fromCode from './state/code.reducer';
import {FileReadService} from "./file/file-read.service";
import {FileUploadService} from "./file/file-upload.service";

@NgModule({
    declarations: [
        CodeEditingComponent,
        CodeMetadataComponent
    ],
    exports: [
        CodeEditingComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        EffectsModule.forFeature([ CodeEffects]),
        StoreModule.forFeature(fromCode.codeFeatureKey, fromCode.reducer)
    ],
    providers: [
        CodeStoreService,
        FileReadService,
        FileUploadService
    ]
})
export class CodeModule {
}
