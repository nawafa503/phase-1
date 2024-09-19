import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';  // Specify the backend API URL with the port

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/groups`);
  }

  createGroup(groupName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/groups`, { name: groupName });
  }

  createChannel(groupId: string, channelName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/groups/channels`, { groupId, channelName });
  }
}
