import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {UsuarioService} from "./services/usuario.service";
import { OauthService} from "./services/oauth.service";
import { GlobalVars } from "./services/global_vars";

// main bootstrap
import { routing } from './app.routes';


import { AppComponent } from './app.component';

// modules
import { NgxAdminLteModule } from 'ngx-admin-lte';

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { RepositoriosNewComponent } from './pages/repositorios/repositorios.new.component';

import { TipoPublicacionComponent } from './pages/tipo-publicacion/tipo-publicacion.component';
import { TipoPublicacionNewComponent } from './pages/tipo-publicacion/tipo-publicacion.new.component';


import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuariosNewComponent } from './pages/usuarios/usuarios.new.component';
import { IdiomaComponent } from './pages/idioma/idioma.component';




const pages = [
    HomeComponent,
    PageNumComponent,
    LoginComponent,
    RegisterComponent,
    RepositoriosComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    UsuariosComponent,
    UsuariosNewComponent,
    TipoPublicacionComponent,
    TipoPublicacionNewComponent,
    RepositoriosComponent,
    RepositoriosNewComponent,
    IdiomaComponent,

  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    routing
  ],
  providers: [ UsuarioService, OauthService,
      GlobalVars ],
  bootstrap: [AppComponent]
})
export class AppModule { }
