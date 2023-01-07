import { Component, OnInit } from '@angular/core';
import * as Sentry from "@sentry/angular";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'angular-sentry-configuration';
  undefinedObj: any;

  public ngOnInit(): void {
    try {
      this.title = this.undefinedObj.title;
    } catch(err) {
      Sentry.captureException(err);
    }
  }
}
