import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ressource } from '../model/ressource';
import { RessourceService } from 'app/shared/services/ressource.service';


@Component({
  selector: 'app-email-share',
  templateUrl: './email-share.component.html',
  styleUrls: ['./email-share.component.scss']
})
export class EmailShareComponent {

  ressourceId: number
  ressource: ressource

  public recipient: string;
  public subject: string;
  public message: string;

  private mailgunUrl: string = 'sandbox2b60eb90aac54913a50acff9e56fcafb.mailgun.org';
  private apiKey: string = 'pubkey-28bccda22e6f9aec289af55d0bbe80b4';

  public constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private ressourceService: RessourceService
  ) {
  }

  ngOnInit() {
    this.ressourceId = Number(this.route.snapshot.paramMap.get('id'));
    this.getRessourceById(this.ressourceId);
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

  send() {
    if (this.recipient && this.subject && this.message) {
      const message = {
        from: 'test@example.com',
        to: this.recipient,
        subject: this.subject,
        html: this.message + "Link to the file: " + this.ressource.fileURL
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('api:' + this.apiKey)
      });

      this.http.post(
        `https://api.mailgun.net/v3/${this.mailgunUrl}/messages`,
        new HttpParams({ fromObject: message }),
        { headers }
      )
        .subscribe(result => {
          console.log('SENT!', result);
          this.resetForm();
        }, error => {
          console.log(error);
        });
    }
  }

  private resetForm() {
    this.recipient = '';
    this.subject = '';
    this.message = '';
  }

}
