import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http : HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post('http://localhost:300/user/signup', novoUsuario);
  }
}
