import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';
import { RepositorioService} from "../../services/repositorio.service";


@Component({
  selector: 'app-repositorios',
  styleUrls: ['./repositorios.component.css'],
  templateUrl: './repositorios.component.html',
  providers: [RepositorioService]
})
export class RepositoriosComponent implements OnInit, OnDestroy {
  public date: Date = new Date();
  public repositorios=[];


  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService,
    public _repositorioService:RepositorioService
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

    this._repositorioService.listarRepositorio().subscribe(result => {

            //if(result.code != 200){
              //  console.log(result);
            //}else{
                this.repositorios = result;
                console.log(this.repositorios);
           // }
          },
        error => {
            console.log(<any>error);
        })



  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
