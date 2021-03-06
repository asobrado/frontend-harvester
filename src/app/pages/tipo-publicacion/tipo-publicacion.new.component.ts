import { Component, OnInit } from '@angular/core';
import {TiposPublicacionService} from "../../services/tiposPublicacion.service";

@Component({
  selector: 'tipo-publicacion-new',
  templateUrl: './tipo-publicacion.new.component.html',
  styleUrls: ['./tipo-publicacion.component.css'],
  providers: [TiposPublicacionService]
})
export class TipoPublicacionNewComponent implements OnInit {

    public titulo: string;

  constructor(public _tipoPublicacionService: TiposPublicacionService) { }

  ngOnInit() {

    this.titulo= 'Agregar Tipo de Publicacion';

  }

}
