import { Injectable } from '@angular/core';
import { category } from '../../category/model/category';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }



  createCategory(category: category) {
    return this.httpClient.post('http://localhost:8080/api/category/categories', category);
  }

  getAllCategories() {
    return this.httpClient.get<category[]>('http://localhost:8080/api/category/categories');
  }

  updateCategory(category: category) {
    return this.httpClient.put('http://localhost:8080/api/category/categories', category);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/category/delete/${id}`);
  }

}
