import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  tab = 1;
  checkActive(value) {
    return value = this.tab ? 'active' : '';
  }
  setActive(value) {
    this.tab = value;
  }

}
