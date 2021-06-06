import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rule-editing',
  templateUrl: './rule-editing.component.html',
  styleUrls: ['./rule-editing.component.css']
})
export class RuleEditingComponent implements OnInit {

  @Input() id: string;

  ngOnInit(): void {
  }
}
