import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeEditingComponent} from "./containers/code-editing/code-editing.component";
import {ComponentsModule} from "../shared/components/components.module";
import CodeStoreService from "./state/code-store.service";
import {CodeMetadataComponent} from "./components/code-matadata/code-metadata.component";

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
        ComponentsModule
    ],
    providers: [
        CodeStoreService,
    ]
})
export class CodeModule {
}
