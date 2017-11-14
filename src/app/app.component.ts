import { Component, OnInit } from '@angular/core';
import {
  User,
  MenuService,
  Message,
  MessagesService,
  NotificationsService,
  Notification,
  LogoService,
  FooterService
} from 'ngx-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // define your footer links
  private footer = {
      left_part: `<strong>
        Copyright &copy; 2017
        <a href="http://sedici.unlp.edu.ar" >PREBI-SEDICI</a>.
    	</strong>
      `,
      right_part: '',
    };
  // define here your own links menu structure
  private mylinks: any = [
    {
      'title': 'Inicio',
      'icon': 'dashboard',
      'link': ['/']
    },
    {
      'title': 'Repositorios',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Crear',
          'link': ['/page/2'],
        },
        {
          'title': 'Listado',
          'link': ['/repositorios'],
        }
      ]
    },
    {
      'title': 'Usuarios',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Crear Usuario',
          'link': ['/page/2'],
        },
        {
          'title': 'Listado',
          'link': ['/page/3'],
        }
      ]
    },
    {
      'title': 'Roles',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Crear Rol',
          'link': ['/page/2'],
        },
        {
          'title': 'Listado',
          'link': ['/page/3'],
        }
      ]
    },
    {
      'title': 'Tipo Publicacion',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Crear Tipo de Publicacion',
          'link': ['/page/2'],
        },
        {
          'title': 'Listado',
          'link': ['/page/3'],
        }
      ]
    },
    {
      'title': 'Configuracion',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Configuracion',
          'link': ['/page/2'],
        }
      ]
    },
  /*  {
      'title': 'External Link',
      'icon': 'google',
      'link': ['http://google.com'],
      'external': true,
      'target': '_blank'
    },*/
  /*  {
      'title': 'External Links',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Github',
          'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
          'icon': 'github',
          'external': true,
          'target': '_blank'
        },
        {
          'title': 'Yahoo',
          'link': ['http://yahoo.com'],
          'icon': 'yahoo',
          'external': true,
          'target': '_blank'
        }
      ]
    }*/
  ];
  // define here your logo
  private logo = {
    html_mini: 'HV<b></b>',
    html_lg: '<b>Harvester</b>',
  };

  constructor(
    private footerServ: FooterService,
    private menuServ: MenuService,
    private logoServ: LogoService,
    private msgServ: MessagesService,
    private notifServ: NotificationsService
  ) {

  }

  public ngOnInit() {
    // define menu
    this.menuServ.setCurrent(this.mylinks);
    this.footerServ.setCurrent(this.footer);
    this.logoServ.setCurrent(this.logo);

    // FAKE MESSAGE
    // defining some test users
    const user1 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'asobrado@gmail.com',
        firstname: 'Ariel',
        lastname: 'Sobrado'
    });
    const user2 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });
    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'le contenu d\'un message d\'une importance extreme',
        destination: user1,
        title: 'un message super important'
    }) );
    // sending a test notif
    this.notifServ.addNotification( new Notification( {
        class: 'fa fa-users text-aqua',
        content: '5 new members joined today',
        link: '/page/2'
    }) );


  }

}
