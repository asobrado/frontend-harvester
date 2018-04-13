import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


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

  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
