import { Component, ViewChild } from '@angular/core';
// import { category } from './model/category';

// import { MatDialog } from '@angular/material/dialog';
// import { CategoryService } from '../shared/services/category.service';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
/**
 * Represents a component for managing categories.
 */
export class CategoryComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;


  // isAdmin = true;

  // selectedCategory: category;
  // totalCategories!: number;
  // currentPage = 1;
  // pageSize = 9;
  // categoryList: category[] = [];
  // filteredCategories: category[] = [];




  // constructor(
  //   private dialog: MatDialog,
  //   private categoryService: CategoryService
  // ) { }


  // ngOnInit() {
  //   this.getCategories();
  // }

  // /**
  //  * Retrieves all categories from the category service.
  //  * @returns {void}
  //  */
  // getCategories(): void {
  //   this.categoryService
  //     .getAllCategories()
  //     .subscribe((categories: category[]) => {
  //       this.categoryList = categories;
  //       this.totalCategories = this.categoryList.length;
  //       this.filteredCategories = this.categoryList.slice(0, this.pageSize);
  //     });
  // }

  // /**
  //  * Handles the page change event for the paginator
  //  * @param event The page event containing the new page index.
  //  */
  // handlePageChange(event: PageEvent) {
  //   if (this.categoryList.length > 0) {
  //     this.currentPage = event.pageIndex;
  //     const startIndex = this.currentPage * this.pageSize;
  //     const endIndex = startIndex + this.pageSize;
  //     this.filteredCategories = this.categoryList.slice(startIndex, endIndex);
  //   } else {
  //     console.log("object")
  //   }
  // }








}
