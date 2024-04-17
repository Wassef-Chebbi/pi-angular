import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { RessourceService } from 'app/shared/services/ressource.service';
import { FileService } from 'app/shared/services/file.service';

import { Router } from '@angular/router';
import { ressourceDTO } from '../model/ressourceDTO';
import { category } from 'app/category/model/category';
import { CategoryService } from 'app/shared/services/category.service';

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.scss']
})
export class AddRessourceComponent {
  newRessourceForm: FormGroup;
  categoryList: category[];
  selectedCategoryId = 3;

  imageName: string;
  imageLocation: string;
  fileLocation: string;
  fileName: string;

  imagePath: string;
  imageURL: string;
  filePath: string;
  fileURL: string;

  newRessource: ressourceDTO;

  canAdd = false;
  canAddFile = false;

  constructor(

    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private ressourceService: RessourceService,
    private uploadService: FileService,
    private router: Router,

  ) {

    this.newRessourceForm = this.formBuilder.group({
      nom: [],
      description: [],

      // imagePath: [this.imagePath ?? ''],
      // imageURL: [this.imageURL ?? '']
    });
  }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getAllCategories()
      .subscribe({
        next: response => {
          this.categoryList = response;
          console.log(this.categoryList)
        },
        error: error => {
          console.error('There was an error adding new category', error);

        }
      });
  }






  addRessource() {

    this.newRessource = this.newRessourceForm.value;
    this.newRessource.imagePath = this.imagePath;
    this.newRessource.imageURL = this.imageURL;
    this.newRessource.fileURL = this.fileURL;
    this.newRessource.filePath = this.filePath;
    this.newRessource.categoryId = this.selectedCategoryId;

    console.log(this.newRessource, "=-=-=-=-=-=-=-=-=-=-=-");

    this.ressourceService.createRessource(this.newRessource)
      .subscribe({
        next: response => {
          this.router.navigate(['ressource/list']);
          console.log(response)
        },
        error: error => {
          console.error('There was an error adding new category', error);

        }
      });
  }

  onImageSelected(event: any) {

    const file: File = event.target.files[0];
    if (file) {
      this.imageName = file.name;
      this.uploadImage(file);
    }
  }

  uploadImage(fl: File) {
    this.imageLocation = 'image';
    this.imagePath = this.imageLocation + '/' + this.imageName;
    this.uploadService.upload(fl, this.imageLocation, this.imageName)
      .subscribe({
        next: response => {
          this.imageURL = response.url;
          if (this.imageURL) {
            this.canAdd = true;
          }

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
      this.fileName = file.name;
      this.uploadFile(file);
    }
  }

  uploadFile(fl: File) {
    this.fileLocation = 'file';
    this.filePath = this.fileLocation + '/' + this.fileName;
    this.uploadService.upload(fl, this.fileLocation, this.fileName)
      .subscribe({
        next: response => {
          this.fileURL = response.url;
          if (this.fileURL) {
            this.canAddFile = true;
          }

          console.log(this.imageURL, "=-=-=-=-=-=-=-=-=-=-=-");
          console.log('Upload successful!', response);
        },
        // error: error => {
        //   console.error('Upload failed:', error);
        // }
      });

  }

  onSelectionChange(event: any) {
    this.selectedCategoryId = event.source.value;



  }



}
