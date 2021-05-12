import {Component, Input, OnInit} from '@angular/core';
import {CodeModel} from "../../state/model/code.model";

@Component({
  selector: 'code-metadata',
  templateUrl: './code-metadata.component.html',
  styleUrls: ['./code-metadata.component.css']
})
export class CodeMetadataComponent implements OnInit {

  @Input() code: CodeModel
  constructor() { }

  ngOnInit(): void {
  }

}
