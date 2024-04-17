import { Component, ViewChild } from '@angular/core';


import { ressource } from '../model/ressource';
import { RessourceService } from 'app/shared/services/ressource.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.scss']
})
export class RessourceListComponent {

  isAdmin = true;

  selected_ressource: ressource;
  total_ressource!: number;
  currentPage = 1;
  pageSize = 9;
  ressource_list: ressource[] = [];
  filteredCategories: ressource[] = [];

  constructor(

    private rerssouceService: RessourceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getRessources();
  }

  getRessources(): void {
    this.rerssouceService
      .getAllRessources()
      .subscribe((categories: ressource[]) => {
        this.ressource_list = categories;
        // this.totalCategories = this.categoryList.length;
        // this.filteredCategories = this.categoryList.slice(0, this.pageSize);
      });
  }

  handlePageChange(event: PageEvent) {
    if (this.ressource_list.length > 0) {
      this.currentPage = event.pageIndex;
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.filteredCategories = this.ressource_list.slice(startIndex, endIndex);
    } else {
      console.log("object")
    }
  }
  add() {
    this.router.navigate(['ressource/add']);
  }

}
