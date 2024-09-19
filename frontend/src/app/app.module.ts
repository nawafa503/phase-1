import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthService } from './services/auth.service';
import { GroupService } from './services/group.service';
import { ChatService } from './services/chat.service';
import { AuthGuard } from './services/auth-guard.service';

// Socket.io config
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login', component: AuthComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
      {path: 'chat/:channelId', component: ChatRoomComponent, canActivate: [AuthGuard]}
    ]),
    SocketIoModule.forRoot(config),
    DashboardComponent,
    ChatRoomComponent,
    AppComponent,
    AdminDashboardComponent,
    AuthComponent
  ],
  providers: [AuthService, GroupService, ChatService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
