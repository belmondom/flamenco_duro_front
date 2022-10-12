import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.scss']
})
export class FormularioUsuariosComponent implements OnInit {

  titulo: string = 'Creación de nuevos';
  usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

}
