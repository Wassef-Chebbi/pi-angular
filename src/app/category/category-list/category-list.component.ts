import { Component, ViewChild } from '@angular/core';
import { category } from './../model/category';


import { CategoryService } from '../../shared/services/category.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isAdmin = JSON.parse(localStorage.getItem('isAdmin') as string);

  role: string

  selectedCategory: category;
  totalCategories!: number;
  currentPage = 1;
  pageSize = 9;
  categoryList: category[] = [];
  filteredCategories: category[] = [];

  constructor(

    private categoryService: CategoryService,
    private router: Router,
  ) {
    if (this.isAdmin) {
      this.role = 'admin'
    } else {
      this.role = 'user'
    }
  }




  ngOnInit() {
    this.getCategories();
  }

  /**
   * Retrieves all categories from the category service.
   * @returns {void}
   */
  getCategories(): void {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: category[]) => {
        this.categoryList = categories;
        this.totalCategories = this.categoryList.length;
        this.filteredCategories = this.categoryList.slice(0, this.pageSize);
      });
  }

  /**
   * Handles the page change event for the paginator
   * @param event The page event containing the new page index.
   */
  handlePageChange(event: PageEvent) {
    if (this.categoryList.length > 0) {
      this.currentPage = event.pageIndex;
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.filteredCategories = this.categoryList.slice(startIndex, endIndex);
    } else {
      console.log("object")
    }
  }
  add() {
    this.router.navigate(['admin/category/add']);
  }
  manage() {
    this.router.navigate(['admin/category/manage', this.selectedCategory.categoryId]);
  }
}
