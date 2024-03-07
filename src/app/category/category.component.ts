import { Component, ViewChild } from '@angular/core';
import { category } from './model/category';
import { UpdateCategoryModalComponent } from './update-category-modal/update-category-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../shared/services/category.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
/**
 * Represents a component for managing categories.
 */
export class CategoryComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('updateCategoryModal') updateCategoryModal: UpdateCategoryModalComponent;

  selectedCategory: category;
  totalCategories!: number;
  currentPage = 1;
  pageSize = 3;
  categoryList: category[] = [];
  filteredCategories: category[] = [];




  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService
  ) { }


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

  /**
   * Opens the modal to add a new category.
   */
  addCategory() {
    this.openModal(true, undefined);
  }

  /**
   * Updates the category.
   * @param category The category to be updated.
   */
  updateCategory(category: category) {
    this.openModal(false, category);
  }

  /**
   * Opens a modal dialog for adding/updating a category.
   * @param isNew - A boolean indicating whether the category is new or not.
   * @param category - An optional category object to be updated. 
   */
  openModal(isNew: boolean, category?: category) {
    const dialogRef = this.dialog.open(UpdateCategoryModalComponent, {
      data: { isNew, category },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCategories();
      }
    });
  }

  /**
   * Deletes a category based on its ID.
   * @param id - The ID of the category to be deleted.
   */
  onDeleteClick(id: number) {
    this.categoryService.deleteCategory(id).subscribe({
      next: (response: any) => {
        this.categoryList = this.categoryList.filter(
          (category) => category.categoryId !== id
        );
        console.log('Category deleted successfully!');
      },
      error: (error: any) => {
        console.error('Error deleting category:', error);
      },
    });
  }
}
