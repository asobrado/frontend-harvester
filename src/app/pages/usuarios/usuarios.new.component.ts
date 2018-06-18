import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'usuarios-new',
  templateUrl: './usuarios.new.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosNewComponent implements OnInit {

  public titulo: string;
  constructor( public _usuarioService: UsuarioService) { }

  ngOnInit() {

      this.titulo= 'Agregar Usuario';
  }

}
