import { Component } from '@angular/core';

@Component({
  selector: 'app-book-doctor',
  templateUrl: './book-doctor.component.html',
  styleUrls: ['./book-doctor.component.css']
})
export class BookDoctorComponent {

  tab = 1;
  checkActive(value) {
    return value = this.tab ? 'active' : '';
  }
  setActive(value) {
    this.tab = value;
  }
}
