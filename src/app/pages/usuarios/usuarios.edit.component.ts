import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'usuarios-edit',
  templateUrl: './usuarios.new.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosEditComponent implements OnInit {

    public titulo: string;
  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {

      this.titulo= 'Editar Usuario';
  }

}
