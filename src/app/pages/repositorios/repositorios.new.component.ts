import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';

@Component({
  selector: 'repositorio-new',
  styleUrls: ['./repositorios.component.css'],
  templateUrl: './repositorios.new.component.html'
})
export class RepositoriosNewComponent implements OnInit, OnDestroy {
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
      description: 'Agregar Repositorio',
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
