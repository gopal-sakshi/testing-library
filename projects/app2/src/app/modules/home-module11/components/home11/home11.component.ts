import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibNotification12, some_injection_token } from 'projects/testing-library';

@Component({
  selector: 'app-home11',
  templateUrl: './home11.component.html',
  styleUrls: ['./home11.component.scss']
})
export class Home11Component implements OnInit {

  showForwardRef12:boolean = false;
  showHome12:boolean = false;
  showStaticText:boolean = false;
  showImageUpload:boolean = false;
  
  constructor(
    private route:ActivatedRoute,
    @Inject(some_injection_token) private blah1:LibNotification12,
    // @Inject(some_injection_token) private blah2:any
  ) { }

  ngOnInit(): void {
    console.log('vachaaa');
    this.blah1.printAge();
    this.blah1.printName();

    this.route.data.subscribe(res => {
      console.log(res);
    })
  }

}
