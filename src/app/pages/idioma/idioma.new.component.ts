import {Component, OnDestroy, OnInit} from '@angular/core';
//import { MessagesService} from "ngx-admin-lte/index";

@Component({
  selector: 'idioma-new',
  templateUrl: './idioma.new.component.html',
  styleUrls: ['./idioma.component.css']
})

export class IdiomaNewComponent implements OnInit, OnDestroy {
    public date: Date = new Date();
    public titulo: string;
    constructor(
  //      private msgServ: MessagesService,
    ) {
        // TODO
    }

    public ngOnInit() {

        this.titulo= 'Agregar un Idioma';

        // setttings the header for the home
        /*this.breadServ.set({
            description: 'Agregar Idioma',
            display: true,
            header: 'Dashboard',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/idiomas'],
                    title: 'Repositorios'
                }
            ]
        });*/

    }

    public ngOnDestroy() {
        // removing the header
    }

}
