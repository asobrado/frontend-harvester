import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, HttpClientModule } from '@angular/common/http';


import {UsuarioService} from "./services/usuario.service";
import { AuthenticationService} from "./services/authentication.service";
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
import { RepositoriosEditComponent } from './pages/repositorios/repositorios.edit.component';


import { TipoPublicacionComponent } from './pages/tipo-publicacion/tipo-publicacion.component';
import { TipoPublicacionNewComponent } from './pages/tipo-publicacion/tipo-publicacion.new.component';
import { TipoPublicacionEditComponent } from './pages/tipo-publicacion/tipo-publicacion.edit.component';



import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuariosNewComponent } from './pages/usuarios/usuarios.new.component';
import { UsuariosEditComponent } from './pages/usuarios/usuarios.edit.component';


import { IdiomaComponent } from './pages/idioma/idioma.component';
import { IdiomaNewComponent } from './pages/idioma/idioma.new.component';
import { IdiomaEditComponent } from './pages/idioma/idioma.edit.component';


import { TareasComponent } from './pages/tareas/tareas.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HarvesterDefitionsComponent } from './harvester-defitions/harvester-defitions.component';


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
    UsuariosEditComponent,
    TipoPublicacionComponent,
    TipoPublicacionNewComponent,
    TipoPublicacionEditComponent,

    RepositoriosComponent,
    RepositoriosNewComponent,
    RepositoriosEditComponent,

    IdiomaComponent,
    IdiomaNewComponent,
    IdiomaEditComponent,
    TareasComponent,
    HarvesterDefitionsComponent,

  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxAdminLteModule,
    routing,
      ReactiveFormsModule,
      HttpClientModule,
  ],
  providers: [ UsuarioService, OauthService,
      GlobalVars,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
