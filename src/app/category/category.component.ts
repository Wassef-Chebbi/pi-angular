import { Component, ViewChild } from '@angular/core';
import { category } from './model/category';
import { UpdateCategoryModalComponent } from './update-category-modal/update-category-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
/**
 * Represents a component for managing categories.
 */
export class CategoryComponent {
  selectedCategory: category;
  @ViewChild('updateCategoryModal')
  updateCategoryModal: UpdateCategoryModalComponent;
  categoryList: category[] = [];
  //isNew = false;

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
  getCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: category[]) => {
        this.categoryList = categories;
      });
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
