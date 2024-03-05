import { Component, Inject, Input, OnInit } from '@angular/core';
import { category } from '../model/category';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'app/shared/services/category.service';

@Component({
  selector: 'app-update-category-modal',
  templateUrl: './update-category-modal.component.html',
  styleUrls: ['./update-category-modal.component.scss']
})
export class UpdateCategoryModalComponent implements OnInit {

  @Input() category?: category;
  @Input() isNew: boolean;
  updateCategoryForm: FormGroup;
  newCategoryForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<UpdateCategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) { }


  ngOnInit(): void {
    this.category = this.data.category;
    this.isNew = this.data.isNew;

    this.updateCategoryForm = this.formBuilder.group({
      categoryId: [this.category?.categoryId ?? ''],
      nom: [this.category?.nom ?? ''],
      description: [this.category?.description ?? ''],
    });
    console.log(this.updateCategoryForm.value);

    this.newCategoryForm = this.formBuilder.group({
      categoryId: [''],
      nom: [''],
      description: [''],
    });
    console.log(this.newCategoryForm.value);
  }



  addCategory() {
    if (this.isNew)
      // Update existing category
      this.categoryService.createCategory(this.newCategoryForm.value)
        .subscribe(
          response => {
            // Handle successful update
            this.dialogRef.close(true); // Close modal with success indicator
          },
          error => {
            // Handle errors
          }
        );
  }


  updateCategory() {
    if (!this.isNew)
      // Update existing category
      this.categoryService.updateCategory(this.updateCategoryForm.value)
        .subscribe(
          response => {
            // Handle successful update
            this.dialogRef.close(true); // Close modal with success indicator
          },
          error => {
            // Handle errors
          }
        );

  }
}
