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
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
    this.category = this.data.category;
    this.isNew = this.data.isNew;

    this.updateCategoryForm = this.formBuilder.group({
      categoryId: [this.category?.categoryId ?? ''],
      nom: [this.category?.nom ?? ''],
      description: [this.category?.description ?? '']
    });

    this.newCategoryForm = this.formBuilder.group({
      categoryId: [''],
      nom: [''],
      description: [''],
    });
  }



  addCategory() {
    if (this.isNew)
      this.categoryService.createCategory(this.newCategoryForm.value)
        .subscribe({
          next: response => {
            this.dialogRef.close(true);
            console.log(response)
          },
          error: error => {
            console.error('There was an error adding new category', error);

          }
        });
  }


  updateCategory() {
    if (!this.isNew)
      this.categoryService.updateCategory(this.updateCategoryForm.value)
        .subscribe({
          next: response => {
            this.dialogRef.close(true);
            console.log(response)
          },
          error: error => {
            console.error('There was an error updating category', error)
          }
        });

  }
}
