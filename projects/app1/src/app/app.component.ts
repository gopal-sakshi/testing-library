import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messageFor13FromAppHome:any;
  constructor(
    private router:Router
  ) {
    this.messageFor13FromAppHome = 'calling lib-notification13 component';

    /*
        In app.module.ts, we used Messages12Module with config24... 
        but in home11.module.ts, we used Messages12Module with config25... try to understand
    */
  }

  navigateToAppHome() {
    this.router.navigate(['']);
  }
}
