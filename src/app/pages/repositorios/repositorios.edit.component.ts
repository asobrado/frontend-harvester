import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';


// Servicios
import { RepositorioService} from "../../services/repositorio.service";

@Component({
    selector: 'repositorio-edit',
    styleUrls: ['./repositorios.component.css'],
    templateUrl: './repositorios.new.component.html',
    providers: [RepositorioService]
})
export class RepositoriosEditComponent implements OnInit, OnDestroy {
    public date: Date = new Date();
    public titulo: string;
    constructor(
        private msgServ: MessagesService,
        private breadServ: BreadcrumbService,
        public _repositorioService: RepositorioService
    ) {
        // TODO
    }

    public ngOnInit() {
        // setttings the header for the home

        this.titulo= 'Editar Repositorio';
        this.breadServ.set({
            description: 'Editar Repositorio',
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
