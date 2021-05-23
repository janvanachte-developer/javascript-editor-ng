import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'code-metadata',
    templateUrl: './code-metadata.component.html',
    styleUrls: ['./code-metadata.component.css']
})
export class CodeMetadataComponent implements OnInit {

    @Output() file = new EventEmitter<File>();
    constructor() {
    }

    ngOnInit(): void {
    }

    changeFile(event) {
        console.log(" file changed " + event.target.value);
     //   if (event.target.files && Array.isArray(event.target.files) && event.target.files.length > 0) {
            this.file.emit(event.target.files[0]);
       // }
    }
}
