import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// modules
import { NgxAdminLteModule } from 'ngx-admin-lte';

// les pages
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';


const pages = [
    HomeComponent,
    PageNumComponent,
    LoginComponent,
    RegisterComponent,
    RepositoriosComponent
];

// main bootstrap
import { routing } from './app.routes';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TipoPublicacionComponent } from './pages/tipo-publicacion/tipo-publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    UsuariosComponent,
    TipoPublicacionComponent
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
