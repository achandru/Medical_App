import { Component } from '@angular/core'


@Component({

    templateUrl: "./home.component.html",
    styleUrls: ['/home.component.css']
})


export class HomeComponent {



    tab = 1;
    checkActive(value) {
        return value == this.tab ? "active" : ""
    }
    setActive(value) {
        this.tab = value
    }
}