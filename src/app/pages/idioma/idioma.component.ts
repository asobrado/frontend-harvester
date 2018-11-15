import { Component, OnInit } from '@angular/core';
import {RepositorioService} from "../../services/repositorio.service";
//import { MessagesService} from "ngx-admin-lte/index";
import {IdiomasService} from "../../services/idiomas.service";

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

    public date: Date = new Date();
    public idiomas=[];


    constructor(
  //      private msgServ: MessagesService,
        public _repositorioIdioma:IdiomasService
    ) {
        // TODO
    }

    public ngOnInit() {
        // setttings the header for the home
        /*this.breadServ.set({
            description: 'Pagina de Idiomas',
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

        this._repositorioIdioma.listarIdiomas().subscribe(result => {

                //if(result.code != 200){
                //  console.log(result);
                //}else{
                this.idiomas = result;
                // }
            },
            error => {
                console.log(<any>error);
            })



    }

    public ngOnDestroy() {
        // removing the header

    }


}
