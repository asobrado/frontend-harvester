import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard, LayoutAuthComponent, LayoutLoginComponent, LayoutRegisterComponent } from 'ngx-admin-lte';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { RepositoriosNewComponent } from './pages/repositorios/repositorios.new.component';

import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuariosNewComponent } from './pages/usuarios/usuarios.new.component';



import { TipoPublicacionComponent } from './pages/tipo-publicacion/tipo-publicacion.component';
import { TipoPublicacionNewComponent } from './pages/tipo-publicacion/tipo-publicacion.new.component';




// Components
import { AppComponent } from './app.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: ''
      },
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home'
      },
      {
        canActivate: [CanActivateGuard],
        component: RepositoriosComponent,
        path: 'repositorios'
      },
      {
        canActivate: [CanActivateGuard],
        component: RepositoriosNewComponent,
        path: 'repositorios/agregar'
      },
      {
        canActivate: [CanActivateGuard],
        component: UsuariosComponent,
        path: 'usuarios'
      },
      {
        canActivate: [CanActivateGuard],
        component: UsuariosComponent,
        path: 'usuarios/agregar'
      },
      {
        canActivate: [CanActivateGuard],
        component: TipoPublicacionComponent,
        path: 'tipos-publicacion'
      },
      {
        canActivate: [CanActivateGuard],
        component: TipoPublicacionNewComponent,
        path: 'tipos-publicacion/agregar'
      },
    ],
    component: LayoutAuthComponent,
    data: [{
      'skin': 'skin-black',
      'display_tasks': false
    }],
    path: '',
  },
  // not logged routes
  {
    children: [
      {
        component: LoginComponent,
        path: ''
      }
    ],
    component: LayoutLoginComponent,
    path: 'login',
  },
  {
    children: [
      {
        component: RegisterComponent,
        path: ''
      }
    ],
    component: LayoutRegisterComponent,
    path: 'register',
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
