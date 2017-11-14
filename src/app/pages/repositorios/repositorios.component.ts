import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';

@Component({
  selector: 'app-repositorios',
  styleUrls: ['./repositorios.component.css'],
  templateUrl: './repositorios.component.html'
})
export class RepositoriosComponent implements OnInit, OnDestroy {
  public date: Date = new Date();

  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService
  ) {
    // TODO
  }

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.set({
      description: 'Pagina de Repositorios',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/repositorios'],
          title: 'Repositorios'
        }
      ]
    });

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
