import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios:any [] = [
    {
      id: "0",
      nombre: "Luisa",
      apellido: "perales",
      correo: "luisita@gmail.com",
      img:"assets/img/persona1.jpg",
      bio:"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo"
    },
    {
      id: "1",
      nombre: "juana",
      apellido: "gutierez",
      correo: "juana34@gmail.com",
      img:"assets/img/persona2.jpg",
      bio:"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo"
    },
    {
      id: "2",
      nombre: "florencio",
      apellido: "gomez",
      correo: "florencio55@gmail.com",
      img:"assets/img/persona3.jpg",
      bio:"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo"
    },
    {
      id: "3",
      nombre: "Anabel",
      apellido: "hilario",
      correo: "anabel15@gmail.com",
      img:"assets/img/persona6.png",
      bio:"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo"
    },
    {
      id: "4",
      nombre: "Rubi",
      apellido: "justo",
      correo: "rubicita34@gmail.com",
      img:"assets/img/persona5.jpg",
      bio:"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo"
    },
    {
      id: "5",
      nombre: "Mateo",
      apellido: "quispe",
      correo: "mateo98@gmail.com",
      img:"assets/img/persona4.jpg",
      bio:"lorem aaaaaaaaaabbbbbbbbbbbbbbb"
    }
  ]
  constructor() { }

  getUsuarios(){
    return this.usuarios;

  }
  getDetalle(i:number){
    return this.usuarios[i];
  }
}
