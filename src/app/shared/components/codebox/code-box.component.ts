import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-codebox',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.css']
})
export class CodeBoxComponent implements OnInit {

  @Input() value: string
  constructor() { }

  ngOnInit(): void {
  }

}
