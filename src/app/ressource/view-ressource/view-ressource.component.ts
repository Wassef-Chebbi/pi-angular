import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ressource } from '../model/ressource';
import { category } from 'app/category/model/category';
import { RessourceService } from 'app/shared/services/ressource.service';

import { Router, ActivatedRoute } from '@angular/router';








@Component({
  selector: 'app-view-ressource',
  templateUrl: './view-ressource.component.html',
  styleUrls: ['./view-ressource.component.scss']
})
export class ViewRessourceComponent {

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



    private router: Router,
    private route: ActivatedRoute,
    private ressourceService: RessourceService
  ) { }


  ngOnInit() {
    this.ressourceId = Number(this.route.snapshot.paramMap.get('id'));
  }



  getCategotyById(id: number) {
    this.ressourceService.getRessourceById(id).subscribe(

    )


  }
}
