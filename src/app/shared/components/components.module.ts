import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBoxComponent } from './codebox/code-box.component';
import { TagsComponent } from './tags/tags.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CodeBoxComponent,
    TagsComponent
  ],
    exports: [
        CodeBoxComponent,
        TagsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ComponentsModule { }
