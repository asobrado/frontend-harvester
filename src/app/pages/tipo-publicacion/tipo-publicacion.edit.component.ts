import { Component, OnInit } from '@angular/core';
import {TiposPublicacionService} from "../../services/tiposPublicacion.service";



@Component({
  selector: 'tipo-publicacion-edit',
  templateUrl: './tipo-publicacion.new.component.html',
  styleUrls: ['./tipo-publicacion.component.css'],
  providers: [TiposPublicacionService]
})
export class TipoPublicacionEditComponent implements OnInit {

  public titulo:string;

  constructor(public _tipoPublicacionService : TiposPublicacionService) { }

  ngOnInit() {

      this.titulo= 'Editar Tipo de Publicacion';
  }

}
