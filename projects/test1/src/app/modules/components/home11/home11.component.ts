import { Component, Inject, OnInit } from '@angular/core';
import { LibNotification12, some_injection_token } from 'testing-library';

@Component({
  selector: 'app-home11',
  templateUrl: './home11.component.html',
  styleUrls: ['./home11.component.scss']
})
export class Home11Component implements OnInit {

  constructor(
    //@Inject(some_injection_token) private blah:LibNotification12
  ) { }

  ngOnInit(): void {
    console.log('vachaaa');
    // this.blah.printAge();
    // this.blah.printName();
  }

}
