import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  pushed = false;
  logs=[];

  onButtonPushed(){
    this.pushed = true;
    this.logs.push(this.getTime());
  }

  getTime() {
    let today = new Date();
    return  today.toLocaleDateString() + today.toLocaleTimeString()
  }
}
