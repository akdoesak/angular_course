import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',

 // template: `
   // <app-server></app-server>
   // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverName ='';
  serverCreated = false;
  servers =['Testserver', 'Testserver2'];

  constructor() {
   setTimeout(()=>{
     this.allowNewServer = true;
   }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event :Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
