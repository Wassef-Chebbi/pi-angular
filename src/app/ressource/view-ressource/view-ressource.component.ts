import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ressource } from '../model/ressource';
import { category } from 'app/category/model/category';
import { RessourceService } from 'app/shared/services/ressource.service';

import { Router, ActivatedRoute } from '@angular/router';
import { OpenaiService } from 'app/shared/services/openai.service';
import { WikiService } from 'app/shared/services/wiki.service';




export class textResponse {
  sno: number = 1;
  text: string = '';
  response: any = '';
}



@Component({
  selector: 'app-view-ressource',
  templateUrl: './view-ressource.component.html',
  styleUrls: ['./view-ressource.component.scss']
})


export class ViewRessourceComponent {

  textList: textResponse[] = [{ sno: 1, text: '', response: '' }];



  updateRessourceForm: FormGroup;

  ressourceId: number;
  ressource: ressource


  categoryNom: string;
  category: category;

  imageURL: string;
  imagePath: string;

  fileURL: string;
  filePath: string;

  role: string

  isAdmin = JSON.parse(localStorage.getItem('isAdmin') as string);


  constructor(

    private openaiService: OpenaiService,

    private router: Router,
    private route: ActivatedRoute,
    private ressourceService: RessourceService,
    private wiki: WikiService
  ) {
    if (this.isAdmin) {
      this.role = 'admin'
    } else {
      this.role = 'user'
    }
  }

  ngOnInit() {
    this.ressourceId = Number(this.route.snapshot.paramMap.get('id'));
    this.getRessourceById(this.ressourceId);
  }


  generateText(data: textResponse) {
    this.openaiService.generateText(data.text).then(text => {
      console.log(data)
      data.response = text;
      if (this.textList.length === data.sno) {
        this.textList.push({ sno: 1, text: '', response: '' });
      }
    });
  }






  getRessourceById(id: number) {
    this.ressourceService.getRessourceById(id).subscribe({
      next: (ressource: ressource) => {
        console.log(ressource);
        this.ressource = ressource;

      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  //=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-

  title = 'wiki';
  searchTerm: any;
  results: any = [];

  totalResults: any;
  page: number = 1;


  onSubmit() {
    this.wiki.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.query.search;

      this.totalResults = res.query.search.length;
      console.log(this.results);
    });
  }


}

