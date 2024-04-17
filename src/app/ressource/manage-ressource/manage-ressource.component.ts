import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { RessourceService } from 'app/shared/services/ressource.service';
import { FileService } from 'app/shared/services/file.service';



import { Router, ActivatedRoute } from '@angular/router';
import { ressourceDTO } from '../model/ressourceDTO';
import { category } from 'app/category/model/category';
import { CategoryService } from 'app/shared/services/category.service';
import { ressource } from '../model/ressource';

@Component({
  selector: 'app-manage-ressource',
  templateUrl: './manage-ressource.component.html',
  styleUrls: ['./manage-ressource.component.scss']
})
export class ManageRessourceComponent {


  updateRessourceForm: FormGroup;

  ressourceId: number;
  ressource: ressource


  categoryId: number;
  category: category;

  imageURL: string;
  imagePath: string;

  fileURL: string;
  filePath: string;




  constructor(

    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private uploadService: FileService,
    private router: Router,
    private route: ActivatedRoute,
    private ressourceService: RessourceService

  ) {


  }

  ngOnInit(): void {
    this.ressourceId = Number(this.route.snapshot.paramMap.get('id'));

    this.getCategory(this.ressourceId);

    this.updateRessourceForm = this.formBuilder.group({
      nom: [this.category?.nom],
      description: [this.category?.description],
      imagePath: [],
      imageURL: [],
      filePath: [],
      fileURL: [],
    });

  }








  getCategory(id: number) {
    this.ressourceService.getRessourceById(id).subscribe({
      next: (category: ressource) => {
        console.log(ressource);
        this.ressource = category;
        this.imageURL = this.ressource.imageURL;
        this.imagePath = this.ressource.imagePath;
        this.categoryId = this.ressource.category.categoryId;

        this.imageURL = this.ressource.imageURL;
        this.imagePath = this.ressource.imagePath;

        console.log(this.ressource);
      },
      error: (error: any) => {
        console.error(error);
      }
    });

  }

  updateCategory() {
    this.updateRessourceForm.value.categoryId = this.categoryId;
    this.updateRessourceForm.value.imageURL = this.imageURL;
    this.updateRessourceForm.value.imagePath = this.imagePath;
    this.updateRessourceForm.value.fileURL = this.fileURL;
    this.updateRessourceForm.value.filePath = this.filePath;
    this.ressource = this.updateRessourceForm.value;
    this.ressourceService.updateRessource(this.ressource)
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



  onImageSelected(event: any) {

    const file: File = event.target.files[0];
    if (file) {

      this.uploadImage(file);
    }
  }

  uploadImage(fl: File) {


    this.uploadService.update(fl, this.ressource.imagePath)
      .subscribe({
        next: response => {
          this.imageURL = response.url;
          // if (this.imageURL) {
          //   this.canAdd = true;
          // }

          console.log(this.imageURL, "=-=-=-=-=-=-=-=-=-=-=-");
          console.log('Upload successful!', response);
        },
        // error: error => {
        //   console.error('Upload failed:', error);
        // }
      });

  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(fl: File) {


    this.uploadService.update(fl, this.filePath)
      .subscribe({
        next: response => {
          this.fileURL = response.url;
          // if (this.fileURL) {
          //   this.canAddFile = true;
          // }

          console.log(this.imageURL, "=-=-=-=-=-=-=-=-=-=-=-");
          console.log('Upload successful!', response);
        },
        // error: error => {
        //   console.error('Upload failed:', error);
        // }
      });

  }

  // onSelectionChange(event: any) {
  //   this.selectedCategoryId = event.source.value;



  // }












  deleteRessource() {
    this.ressourceService.deleteRessource(this.ressourceId)
      .subscribe({
        next: response => {
          console.log(response);
          this.router.navigate(['/list']);
        },
        error: error => {
          console.error('There was an error deleting ressource', error);

        }
      });
  }

}
