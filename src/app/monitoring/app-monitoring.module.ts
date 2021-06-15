import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerService} from "./log/logger.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      LoggerService
  ]
})
export class AppMonitoringModule {
  constructor() {
    console.log('AppMonitoringModule created')
  }
}
