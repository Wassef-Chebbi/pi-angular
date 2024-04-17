import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ressource } from '../../ressource/model/ressource';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }


  upload(file: File, path: string, name: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    formData.append('name', name);
    return this.httpClient.post('http://localhost:8080/api/file/upload', formData);
  }

  update(file: File, path: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    return this.httpClient.post('http://localhost:8080/api/file/update', formData);
  }




}
