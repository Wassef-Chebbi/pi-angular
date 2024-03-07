import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ressource } from '../../ressource/model/ressource';
import { addRessourceDto } from 'app/ressource/dto/add-ressource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }


  upload(file: File, path: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    return this.httpClient.post('http://localhost:8080/api/upload', formData);
  }


}
