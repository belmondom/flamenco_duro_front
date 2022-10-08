import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.listarTodosUsuarios();
  }

  // Lista todos los usuarios
  listarTodosUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

}
