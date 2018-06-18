import { Component, OnInit } from '@angular/core';
import {TiposPublicacionService} from "../../services/tiposPublicacion.service";

@Component({
  selector: 'app-tipo-publicacion',
  templateUrl: './tipo-publicacion.component.html',
  styleUrls: ['./tipo-publicacion.component.css'],
  providers: [TiposPublicacionService]
})
export class TipoPublicacionComponent implements OnInit {

  constructor(public _tipoPublicacionService: TiposPublicacionService) { }

  ngOnInit() {
  }

}
