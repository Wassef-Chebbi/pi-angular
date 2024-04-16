import { Component, Input, OnInit, Inject } from '@angular/core';
import { CategoryService } from 'app/shared/services/category.service';
import { ressource } from '../model/ressource';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RessourceService } from 'app/shared/services/ressource.service';
import { FileService } from 'app/shared/services/file.service';
import { category } from 'app/category/model/category';
import { addRessourceDto } from '../dto/add-ressource';
@Component({
  selector: 'app-ressource-modal',
  templateUrl: './ressource-modal.component.html',
  styleUrls: ['./ressource-modal.component.scss']
})
export class RessourceModalComponent {

  @Input() ressource?: ressource;
  @Input() isNew: boolean;
  newRessourceForm: FormGroup;
  categoriesIds = new FormControl([]);
  categoryList: category[] = [];
  newRessourceDto: addRessourceDto;
  fileURL: string;
  uploadPath = 'file/ressource/';
  fileName: string;

  updateRessourceForm: FormGroup;
  selectedCategoriesIds: number[] = [];






  constructor(
    private ressourceService: RessourceService,
    public dialogRef: MatDialogRef<RessourceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private uploadService: FileService
  ) {

    this.ressource = this.data.category;
    this.isNew = this.data.isNew;

    this.updateRessourceForm = this.formBuilder.group({
      categoryId: [this.ressource?.ressourceId ?? ''],
      nom: [this.ressource?.nom ?? ''],
      description: [this.ressource?.description ?? ''],
      categoriesIds: [this.ressource?.categories.map(c => c.categoryId) ?? []],
      URL: [this.ressource?.fileURL ?? '']
    });

    this.newRessourceForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      categoriesIds: [],
      URL: [this.fileURL ?? '']
    });
  }

  ngOnInit() {
    this.selectedCategoriesIds = this.ressource?.categories.map(c => c.categoryId) ?? [];
    this.ressource = this.data.ressource;
    this.isNew = this.data.isNew;
    this.getCategories();

  }
  async getCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: category[]) => {
        this.categoryList = categories;
      });
  }



  addRessource() {
    if (this.isNew) {
      this.newRessourceDto = this.newRessourceForm.value;
      this.newRessourceDto.URL = this.fileURL;
      console.log(this.newRessourceDto, "$$$$$$$$");
      this.ressourceService.createRessource(this.newRessourceDto)
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
  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.upload(file);
    }
  }


  upload(fl: File): string {
    console.log(this.uploadPath)
    this.uploadService.upload(fl, this.uploadPath, fl.name)
      .subscribe(response => {
        this.fileURL = response.toString();

        console.log('Upload successful!', response);
      }, error => {
        console.error('Upload failed:', error);
      });
    return this.fileURL;
  }

  updateRessource() {
    if (!this.isNew)
      this.ressourceService.updateRessource(this.updateRessourceForm.value)
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









  onSelectionChange(event: any) {
    const selectedOption = event.source.value;

    if (this.categoriesIds.value) {
      if (event.isAdding) {
        (this.categoriesIds.value as number[]).push(selectedOption);
      }
      else {
        const index = (this.categoriesIds.value as number[]).indexOf(selectedOption);
        if (index !== -1) {
          this.categoriesIds.value.splice(index, 1);
        }
      }
    }
    console.log(this.categoriesIds.value);

  }


}
