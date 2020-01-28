import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { format } from 'url';
import { from } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarios:any[] = [];

  constructor(private _usuariosServicios:UsuariosService, private _ruta:Router) { 
    this.usuarios = _usuariosServicios.getUsuarios();
  }

  ngOnInit() {
  }

  verDetalle(i:number){
    this._ruta.navigate(['detalle',i])
  }

}
