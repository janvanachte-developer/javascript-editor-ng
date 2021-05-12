import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.css']
})
export class CodeBoxComponent implements OnInit {

  @Input() value: string
  @Output() valueEvent= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log('event' + event.target.value );
    this.valueEvent.emit(event.target.value);

  }
}
