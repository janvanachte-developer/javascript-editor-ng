import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../monitoring/log/logger.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.debug("HomeComponent initialised");
  }

}
