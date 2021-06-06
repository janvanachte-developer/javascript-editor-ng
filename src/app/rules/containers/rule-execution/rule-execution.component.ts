import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rule-execution',
  templateUrl: './rule-execution.component.html',
  styleUrls: ['./rule-execution.component.css']
})
export class RuleExecutionComponent implements OnInit {

  @Input() id: string;

  ngOnInit(): void {
  }

}
