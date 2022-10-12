import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', 
    component: InicioComponent
  },
  {
    path: 'usuarios', 
    component: UsuariosComponent
  }
  ,
  {
    path: 'formulario-usuarios', 
    component: FormularioUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
