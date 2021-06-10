import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Rule} from "../../model/rule";

@Component({
  selector: 'rules-navigation-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class RulesTabsComponent {

  @Input() rules: Rule[];
  @Output("add") add= new EventEmitter()

  onAddButtonClick($event) {
    this.add.emit()
  }
}
