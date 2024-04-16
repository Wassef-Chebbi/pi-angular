import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'app/shared/services/category.service';
import { FileService } from 'app/shared/services/file.service';
import { category } from '../model/category';
import { categoryDTO } from '../model/categoryDTO';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  newCategoryForm: FormGroup;

  imageName: string;
  imageLocation = "Category/images";
  imagePath: string;
  imageURL: string;

  newCategory: categoryDTO;

  constructor(

    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private uploadService: FileService

  ) {

    this.newCategoryForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      // imagePath: [this.imagePath ?? ''],
      // imageURL: [this.imageURL ?? '']
    });
  }







  addCategory() {
    this.newCategory = this.newCategoryForm.value;
    this.newCategory.imagePath = this.imagePath;
    this.newCategory.imageURL = this.imageURL;
    console.log(this.newCategory, "=-=-=-=-=-=-=-=-=-=-=-");

    this.categoryService.createCategory(this.newCategory)
      .subscribe({
        next: response => {

          console.log(response)
        },
        error: error => {
          console.error('There was an error adding new category', error);

        }
      });
  }


  onFileSelected(event: any) {

    const file: File = event.target.files[0];
    if (file) {
      this.imageName = file.name;
      this.uploadImage(file);
    }
  }

  uploadImage(fl: File) {
    this.imagePath = this.imageLocation + '/' + this.imageName;
    this.uploadService.upload(fl, this.imageLocation, this.imageName)
      .subscribe({
        next: response => {
          this.imageURL = response.url;
          console.log(this.imageURL, "=-=-=-=-=-=-=-=-=-=-=-");
          console.log('Upload successful!', response);
        },
        // error: error => {
        //   console.error('Upload failed:', error);
        // }
      });

  }

}
