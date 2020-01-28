import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { app_routing } from './app.routes';
//servicios
import { UsuariosService } from './servicios/usuarios.service';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { from } from 'rxjs';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [
    UsuariosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
