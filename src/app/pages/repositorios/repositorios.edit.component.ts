import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Servicios
import { RepositorioService} from "../../services/repositorio.service";
import {Repositorio} from "../../models/Repositorio";

@Component({
    selector: 'repositorio-edit',
    styleUrls: ['./repositorios.component.css'],
    templateUrl: './repositorios.new.component.html',
    providers: [RepositorioService]
})
export class RepositoriosEditComponent implements OnInit, OnDestroy {
    public date: Date = new Date();
    public titulo: string;
    public repositorio: Repositorio;
    constructor(
        private msgServ: MessagesService,
        private breadServ: BreadcrumbService,
        public _repositorioService: RepositorioService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        // TODO
    }

    public ngOnInit() {
        // setttings the header for the home

        this.titulo= 'Editar Repositorio';

    }


    public onSubmit(){
            this.updateRepositorio();
      }

    public updateRepositorio(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._repositorioService.editarRepositorio(id, this.repositorio).subscribe(
                response => {
                    if(response.code == 200){
                        this._router.navigate(['/repositorios', id]);
                    }else{
                        console.log(response);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }








    public ngOnDestroy() {
        // removing the header
        this.breadServ.clear();
    }

}
