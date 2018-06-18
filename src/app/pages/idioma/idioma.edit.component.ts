import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService, MessagesService} from "ngx-admin-lte/index";
import {IdiomasService} from "../../services/idiomas.service";

@Component({
  selector: 'idioma-new',
  templateUrl: './idioma.new.component.html',
  styleUrls: ['./idioma.component.css'],
  providers: [IdiomasService]
})

export class IdiomaEditComponent implements OnInit, OnDestroy {
    public date: Date = new Date();
    public titulo : string;
    constructor(
        private msgServ: MessagesService,
        private breadServ: BreadcrumbService,
        public _idiomaService : IdiomasService
    ) {
        // TODO
    }

    public ngOnInit() {


        this.titulo= 'Editar un Idioma';

        // setttings the header for the home
        this.breadServ.set({
            description: 'Editar Idioma',
            display: true,
            header: 'Dashboard',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/idiomas'],
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
