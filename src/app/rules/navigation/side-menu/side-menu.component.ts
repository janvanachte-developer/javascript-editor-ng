import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class RuleSideMenuComponent implements OnInit {

  id: string;
  private id$: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log('ngOnInit ');

    this.id$ = this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      console.log('new id ' + this.id)
    });
  }
}
