import { Injectable } from '@angular/core';
import { category } from '../../category/model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryDTO } from 'app/category/model/categoryDTO';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }



  createCategory(category: categoryDTO): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/category/add', category);
  }

  getCategoryById(id: number): Observable<category> {
    return this.httpClient.get<category>(`http://localhost:8080/api/category/getById/${id}`);
  }

  getAllCategories(): Observable<category[]> {
    return this.httpClient.get<category[]>('http://localhost:8080/api/category/getAll');
  }

  updateCategory(category: category): Observable<any> {
    return this.httpClient.put('http://localhost:8080/api/category/update', category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/api/category/delete/${id}`);
  }

}
