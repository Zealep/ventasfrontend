import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  config = {

    paddingAtStart: true,
    classname: 'custom-sidenav',
    listBackgroundColor: '#303f9f',
    fontColor: 'white',
    backgroundColor: '#303f9f',
    selectedListFontColor: '#ff4081',
    highlightOnSelect: true,
  };



  appitems = [
    {
        label: 'Compras',
        icon: 'local_grocery_store',
        items: [
            {
                label: 'Registrar compra',
                link: '/item-1-1',
                faIcon: 'fab fa-accusoft'
            },

        ]
    },

    {
      label: 'Ventas',
      icon: 'sell',
      items: [
          {
              label: 'Registrar venta',
              link: '/item-1-1',
          },
          {
            label: 'Anular venta',
            link: '/item-1-1',
        },

      ]
  },

  {
    label: 'Almacen',
    icon: 'store',
    items: [
        {
            label: 'Inventario',
            link: '/item-1-1',
        },
        {
          label: 'Categorias',
          link: '/item-1-1',
      },

    ]
},

{
  label: 'Administracion',
  icon: 'settings',
  items: [
      {
          label: 'Gastos',
          link: '/item-1-1',
      },
      {
        label: 'Empleados',
        link: '/empleado',
    },
    {
      label: 'Tipos decoumentos',
      link: '/item-1-1',
  },
  {
    label: 'Proveedores',
    link: '/item-1-1',
},

  ]
},


{
  label: 'Reportes',
  icon: 'summarize',
  items: [
      {
          label: 'Reporte de ventas',
          link: '/item-1-1',
      },
      {
        label: 'Reporte detalle de ventas',
        link: '/item-1-1',
    },
    {
      label: 'Reporte de compras',
      link: '/item-1-1',
  },
  {
    label: 'Reporte detalle de compras',
    link: '/item-1-1',
},

  ]
}


];

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
  }

  selectedItem(event:any){
    console.log('event',event)
    this.router.navigate(['/pages'+event.link]);
  }

/*
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

      this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
*/
}
