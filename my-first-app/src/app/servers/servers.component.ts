import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'inital name';
  username = '';
  userStatus = '';
  serverCreated = false;
  servers = ['Serv 1', 'Serv 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onUserLogin() {
    this.userStatus = 'Well done: ' +  this.username + ' !';
    this.username = '';
  }
}
