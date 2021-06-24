import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Rule} from "../../model/rule";
import {LoggerService} from "../../../monitoring/log/logger.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-rule-execution',
  templateUrl: './rule-execution.component.html',
  styleUrls: ['./rule-execution.component.css']
})
export class RuleExecutionComponent {

  @Input() rule: Rule;
  @Output("buttonClick") buttonClick= new EventEmitter()

  constructor(private formBuilder:FormBuilder, private logger:LoggerService) {}

  onButtonClick() {
    this.logger.debug('button clicked for rule ' + this.rule.id,'RuleExecutionComponent')
    this.buttonClick.emit({id: this.rule.id})
  }

}
