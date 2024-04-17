import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ressource } from '../../ressource/model/ressource';
import { ressourceDTO } from 'app/ressource/model/ressourceDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private httpClient: HttpClient) { }


  createRessource(ressource: ressourceDTO) {
    return this.httpClient.post('http://localhost:8080/api/ressource/add', ressource);
  }

  getAllRessources(): Observable<ressource[]> {
    return this.httpClient.get<ressource[]>('http://localhost:8080/api/ressource/getAll');

  }

  updateRessource(ressource: ressource) {
    return this.httpClient.put('http://localhost:8080/api/ressource/update', ressource);
  }

  deleteRessource(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/ressource/delete/${id}`);
  }

  getRessourceById(id: number): Observable<ressource> {
    return this.httpClient.get<ressource>(`http://localhost:8080/api/ressource/getById/${id}`);
  }

  getRessourceByCategory(id: number): Observable<ressource[]> {
    return this.httpClient.get<ressource[]>(`http://localhost:8080/api/ressource/getByCategory/${id}`);
  }
}
