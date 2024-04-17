import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { RessourceService } from '../shared/services/ressource.service';
import { ressource } from './model/ressource';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent {

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // ressourceList: ressource[] = [];
  // // [{ "ressourceId": 1, "nom": "Resource Name 1", "description": "This is a resource description 1", "categories": [] },
  // // { "ressourceId": 2, "nom": "Resource Name 2", "description": "This is a resource description 2", "categories": [] },
  // // { "ressourceId": 3, "nom": "Another Resource", "description": "This is another resource description", "categories": [] },
  // // { "ressourceId": 4, "nom": "hello res", "description": "hello desc", "categories": [{ "categoryId": 11, "nom": "dddd", "description": "dddd" }, { "categoryId": 9, "nom": "bbbb", "description": "bbb" }, { "categoryId": 10, "nom": "islem", "description": "islem" }] },
  // // { "ressourceId": 5, "nom": "sdds", "description": "sdds", "categories": [{ "categoryId": 14, "nom": "xxxxx", "description": "xxxx" }, { "categoryId": 12, "nom": "ffff", "description": "ffff" }] },
  // // { "ressourceId": 6, "nom": "ooooooo", "description": "oooooooo", "categories": [{ "categoryId": 11, "nom": "dddd", "description": "dddd" }, { "categoryId": 10, "nom": "islem", "description": "islem" }] },
  // // { "ressourceId": 7, "nom": "vv", "description": "vv", "categories": [{ "categoryId": 14, "nom": "xxxxx", "description": "xxxx" }] }];
  // filteredRes: ressource[] = [];
  // totalRessources!: number;
  // currentPage = 1;
  // pageSize = 6;

  // constructor(
  //   private ressourceService: RessourceService,
  //   private dialog: MatDialog,

  // ) {
  // }


  // ngOnInit() {
  //   Promise.resolve().then(() => this.getRessources());




  // }






  // getRessources() {
  //   this.ressourceService
  //     .getAllRessources()
  //     .subscribe((ressources: ressource[]) => {
  //       this.ressourceList = ressources;
  //       console.log(this.ressourceList);
  //       this.totalRessources = this.ressourceList.length;
  //       this.filteredRes = this.ressourceList.slice(0, this.pageSize);
  //     });


  // }

  // handlePageChange(event: PageEvent) {
  //   if (this.ressourceList.length > 0) {
  //     this.currentPage = event.pageIndex;
  //     const startIndex = this.currentPage * this.pageSize;
  //     const endIndex = startIndex + this.pageSize;
  //     this.filteredRes = this.ressourceList.slice(startIndex, endIndex);
  //   } else {
  //     console.log("object")
  //   }
  // }

  // /**
  //  * Opens the modal to add a new category.
  //  */
  // addRessource() {
  //   this.openModal(true, undefined);
  // }

  // updateRessource(ressource: ressource) {
  //   this.openModal(false, ressource);
  // }

  // openModal(isNew: boolean, ressource?: ressource) {
  //   const dialogRef = this.dialog.open(RessourceModalComponent, {
  //     data: { isNew, ressource },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.getRessources();
  //     }
  //   });
  // }



  // onDeleteClick(id: number) {

  //   this.ressourceService.deleteRessource(id).subscribe({
  //     next: (response: any) => {
  //       this.ressourceList = this.ressourceList.filter(
  //         (ressource) => ressource.ressourceId !== id
  //       );

  //       console.log('Category deleted successfully!');
  //     },
  //     error: (error: any) => {
  //       console.error('Error deleting category:', error);
  //     },
  //   });
  // }
  // // onDeleteClick(id: number) {
  // //   this.ressourceService.deleteRessource(id).subscribe({
  // //     next: (response: any) => {
  // //       const index = this.ressourceList.findIndex(
  // //         (ressource) => ressource.ressourceId === id
  // //       );
  // //       if (index !== -1) {
  // //         this.ressourceList.splice(index, 1);
  // //       }
  // //       console.log('Category deleted successfully!');
  // //     },
  // //     error: (error: any) => {
  // //       console.error('Error deleting category:', error);
  // //     },
  // //   });
  // // }

}
