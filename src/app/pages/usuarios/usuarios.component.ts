import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {

  public usuarios=[];
  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
      this._usuarioService.listarUsuario().subscribe(result => {
          this.usuarios = result;
      },
      error => {
              console.log(<any>error);
          })

  }




}
