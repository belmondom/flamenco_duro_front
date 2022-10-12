import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselCabeceraComponent } from './carrusel-cabecera/carrusel-cabecera.component';
import { MenuCarruselComponent } from './carrusel-cabecera/menu-carrusel/menu-carrusel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraGeneralComponent } from './cabecera-general/cabecera-general.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CarruselCabeceraComponent,
    MenuCarruselComponent,
    UsuariosComponent,
    CabeceraGeneralComponent,
    FooterComponent,
    FormularioUsuariosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
