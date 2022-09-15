import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-home',
  templateUrl: './animals-home.component.html',
  styleUrls: ['./animals-home.component.scss']
})
export class AnimalsHomeComponent implements OnInit {

  images:any;

  constructor() {
    this.images = {
      tiger: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Tiger_in_the_water.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/1155px-2012_Suedchinesischer_Tiger.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg'
      ],
      elephant: [
        'https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/6d/Asian_Elephant%2C_Royal_Chitwan_National_Park.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/13/2010-kabini-tusker-bark.jpg'
      ],
      bear: [
        'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Polar_Bear_AdF.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/14/Brown_bear_%28Ursus_arctos%29%2C_Viiksimo%2C_Kainuu_region%2C_Finland_%2829058988558%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bear_Alaska_%283%29.jpg/1024px-Bear_Alaska_%283%29.jpg'
      ]
    }
   }

  ngOnInit(): void {
  }

}
