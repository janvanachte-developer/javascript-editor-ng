import {Component, Input, OnInit} from '@angular/core';
import {Rule} from "../../model/rule";

@Component({
  selector: 'rules-navigation-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class RulesTabsComponent implements OnInit {

  @Input() rules: Rule[];
  ngOnInit(): void {
  }

}
