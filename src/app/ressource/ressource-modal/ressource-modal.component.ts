import { Component, Input, OnInit, Inject } from '@angular/core';
import { CategoryService } from 'app/shared/services/category.service';
import { ressource } from '../model/ressource';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RessourceService } from 'app/shared/services/ressource.service';
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


  constructor(
    private ressourceService: RessourceService,
    public dialogRef: MatDialogRef<RessourceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.newRessourceForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      categoriesIds: [] // Initialize as an empty array
    });
  }

  ngOnInit() {

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
      console.log(this.newRessourceDto);
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
