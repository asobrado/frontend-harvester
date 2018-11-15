import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public date: Date = new Date();

  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService
  ) {
    // TODO
  }

  public ngOnInit() {
    // setttings the header for the home

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
