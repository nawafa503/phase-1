import {Component, NgModule, OnInit} from '@angular/core';
import { GroupService } from '../services/group.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule, RouterLink,HttpClientModule],
  providers: [GroupService]
})

export class DashboardComponent implements OnInit {
  groups: any[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
  }
}
