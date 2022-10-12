import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios/usuario';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.scss']
})
export class FormularioUsuariosComponent implements OnInit {

  titulo: string = 'Creación de nuevos';
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioServices: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  // Recopila los datos del objeto usuarios introducidos con el formulario y los envia a "usuario.service.ts"
  // y este crea un nuevo usuario en la base de datos
  create(): void{
    console.log(this.usuario)
    this.usuarioServices.create(this.usuario).subscribe(
      response => this.router.navigate(['/usuarios'])
    );
  }

}
