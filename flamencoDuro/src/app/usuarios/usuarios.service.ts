import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  // Lista todos los usuarios
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get(this.urlEndPoint + '/usuarios').pipe(
      map(response => response as Usuario[])
    );
  }
}
