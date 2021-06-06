import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {

  id: string;
  private id$: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('ngOnInit ');

    this.id$ = this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      console.log('new id ' + this.id)
    });
  }

  navigate(path) {
    this.router.navigate([{outlets: {primary: path, sidemenu:path}}],
        {relativeTo: this.activatedRoute});
  }
}
