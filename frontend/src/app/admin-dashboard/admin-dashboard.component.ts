import {Component, NgModule} from '@angular/core';
import { GroupService } from '../services/group.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [GroupService]

})



export class AdminDashboardComponent {
  groupName: string = '';
  channelName: string = '';
  selectedGroupId: string = '';
  groups: any[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

  createGroup() {
    this.groupService.createGroup(this.groupName).subscribe(group => {
      this.groups.push(group);
      this.groupName = '';
    });
  }

  createChannel() {
    this.groupService.createChannel(this.selectedGroupId, this.channelName).subscribe(channel => {
      const group = this.groups.find(g => g.id === this.selectedGroupId);
      group.channels.push(channel);
      this.channelName = '';
    });
  }
}
