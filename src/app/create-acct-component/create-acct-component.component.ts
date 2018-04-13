import { Component } from '@angular/core';

@Component({
  selector: 'app-create-acct-component',
  templateUrl: './create-acct-component.component.html',
  styleUrls: ['./create-acct-component.component.css']
})
export class CreateAcctComponentComponent {


  
  tab = 1;
  checkActive(value) {
      return value == this.tab ? "active" : ""
  }
  setActive(value) {
      this.tab = value
  }

}
