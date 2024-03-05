import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ClubService } from '../services/club.service';
import { Club } from '../models/club';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-club-list-dash',
  templateUrl: './club-list-dash.component.html',
  styleUrls: ['./club-list-dash.component.scss'],
})
export class ClubListDashComponent {}
