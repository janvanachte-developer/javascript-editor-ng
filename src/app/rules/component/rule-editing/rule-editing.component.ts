import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rule} from "../../model/rule";
import {LoggerService} from "../../../monitoring/log/logger.service";
import {FormBuilder, FormControl, FormGroup, Validator} from "@angular/forms";

@Component({
  selector: 'app-rule-editing',
  templateUrl: './rule-editing.component.html',
  styleUrls: ['./rule-editing.component.css']
})
export class RuleEditingComponent implements OnInit{

  // https://dzone.com/articles/handling-property-changes-using-decorator-an-alter
  _rule: Rule;
  @Input()
  get rule() {
    return this._rule;
  }
  set rule(rule: Rule) {
    this._rule = rule;
    console.log('(replacing rule in form with ' + JSON.stringify(rule)+')'  );
    this.metaDataForm.patchValue(rule);
  }

  @Output() buttonClick= new EventEmitter<Rule>()

  name = new FormControl('');
  metaDataForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private logger:LoggerService) {}

  ngOnInit(): void {
    this.createForm();
  }

/*
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const change = changes[propName];
      const currentValue = change.currentValue;
      console.log('(ngOnChanges ' + propName + '='+ JSON.stringify(currentValue)+')'  );

      if ( propName === 'rule') {
        this.metaDataForm.patchValue(currentValue)
      }
    }
  }
*/

  private createForm() {
    const validators:Validator[] = [];
    this.metaDataForm = this.formBuilder.group({
      name: new FormControl(''),
      description: new FormControl('')
    },{
      validators: []
    });
  }

  submit() {
    this.logger.debug('submit button clicked', 'RuleEditingComponent')
    this.logger.debug('submit event ' + JSON.stringify(this.metaDataForm.value), 'RuleEditingComponent');
    // @ts-ignore
    this.buttonClick.emit({
      id: this.rule.id,
      name: this.metaDataForm.value.name
    })
  }
}
