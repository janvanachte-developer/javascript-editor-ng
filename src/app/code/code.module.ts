import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeEditingComponent} from "./containers/code-editing/code-editing.component";
import {ComponentsModule} from "../shared/components/components.module";
import CodeStateService from "./state/code-state.service";
import {CodeMetadataComponent} from "./components/code-matadata/code-metadata.component";
import {EffectsModule} from '@ngrx/effects';
import {CodeEffects} from './state/code.effects';
import {StoreModule} from '@ngrx/store';
import * as fromCode from './state/code.reducer';
import {FileReadService} from "./file/file-read.service";
import {FileUploadService} from "./file/file-upload.service";
import {CodeEditingTabsComponent} from "./navigation/code-editing-tab/code-editing-tabs.component";


@NgModule({
    declarations: [
        CodeEditingComponent,
        CodeMetadataComponent,
        CodeEditingTabsComponent
    ],
    exports: [
        CodeEditingTabsComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        EffectsModule.forFeature([ CodeEffects]),
        StoreModule.forFeature(fromCode.codeFeatureKey, fromCode.reducer)
    ],
    providers: [
        CodeStateService,
        FileReadService,
        FileUploadService
    ]
})
export class CodeModule {
}
