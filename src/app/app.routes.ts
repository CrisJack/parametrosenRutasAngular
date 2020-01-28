import {RouterModule,Routes}from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';




const APP_ROUTE: Routes = [
    {path:'detalle/:id',component:DetalleComponent,},
    

]

export const app_routing = RouterModule.forRoot(APP_ROUTE);