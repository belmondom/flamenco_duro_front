import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private urlEndPoint: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  // Lista todos los usuarios
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get(this.urlEndPoint + '/usuarios').pipe(
      map(response => response as Usuario[])
    );
  }


  //Crea un nuevo usuario desde el objeto Usuario cargado sus parametros desde el formulario-usuario
  create(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint + '/usuario-add', usuario, {headers: this.httpHeaders});
  }
}
