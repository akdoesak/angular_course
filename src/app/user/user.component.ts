import { Component } from '@angular/core';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  userName: string=''
  userNameStatus: string='No username'

  onUpdateUserName(event :Event){
    this.userName = (<HTMLInputElement> event.target).value;
    this.userNameStatus = 'Username is '+ this.userName;
  }

  onResetUsername(){
    this.userName = ''
    this.userNameStatus = 'No username'
  }
}
