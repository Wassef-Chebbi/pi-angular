import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'app/shared/services/category.service';
import { FileService } from 'app/shared/services/file.service';
import { category } from '../model/category';
import { categoryDTO } from '../model/categoryDTO';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent {

  updateCategoryForm: FormGroup;
  categoryId: number;
  category: category;

  imageURL: string;
  imagePath: string;




  constructor(

    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private uploadService: FileService,
    private router: Router,
    private route: ActivatedRoute,

  ) {


  }



  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.getCategory(this.categoryId);

    this.updateCategoryForm = this.formBuilder.group({
      nom: [this.category?.nom],
      description: [this.category?.description],
      imagePath: [],
      imageURL: []
    });

  }


  getCategory(id: number) {
    this.categoryService.getCategoryById(id).subscribe({
      next: (category: category) => {
        console.log(category);
        this.category = category;
        this.imageURL = this.category.imageURL;
        this.imagePath = this.category.imagePath;

        console.log(this.category);
      },
      error: (error: any) => {
        console.error(error);
      }
    });

  }

  updateCategory() {
    this.updateCategoryForm.value.categoryId = this.categoryId;
    this.updateCategoryForm.value.imageURL = this.imageURL;
    this.updateCategoryForm.value.imagePath = this.imagePath;
    this.category = this.updateCategoryForm.value;
    this.categoryService.updateCategory(this.category)
      .subscribe({
        next: response => {
          console.log(response);
          this.router.navigate(['/list']);
        },
        error: error => {
          console.error('There was an error updating category', error);

        }
      });
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];
    if (file) {

      this.uploadImage(file);
    }
  }

  uploadImage(fl: File) {

    this.uploadService.update(fl, this.category.imagePath)
      .subscribe({
        next: (response) => {
          //this.category = response;
          this.imageURL = response.url;
          console.log('update successful!', this.imageURL);
        },
        // error: error => {
        //   console.error('Upload failed:', error);
        // }
      });

  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.categoryId)
      .subscribe({
        next: response => {
          console.log(response);
          this.router.navigate(['/list']);
        },
        error: error => {
          console.error('There was an error deleting category', error);

        }
      });
  }

}
