import { Component, Inject, OnInit } from '@angular/core';
import { LibNotification12, some_injection_token } from 'testing-library';

@Component({
  selector: 'app-home11',
  templateUrl: './home11.component.html',
  styleUrls: ['./home11.component.scss']
})
export class Home11Component implements OnInit {

  constructor(
    @Inject(some_injection_token) private blah1:LibNotification12,
    // @Inject(some_injection_token) private blah2:any
  ) { }

  ngOnInit(): void {
    console.log('vachaaa');
    this.blah1.printAge();
    this.blah1.printName();
  }

}
