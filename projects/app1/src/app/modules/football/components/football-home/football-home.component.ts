import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football-home',
  templateUrl: './football-home.component.html',
  styleUrls: ['./football-home.component.scss']
})
export class FootballHomeComponent implements OnInit {

  footballClubs: any;
  showClubs: boolean;
  showPlayers: boolean;

  constructor() { 
    this.footballClubs = [
      {
        name: 'Real Madrid',
        clTitles: 13,
        domesticTitles: 34,
        clubAddress: {
          stadiumName: 'Santiago Bernabeu',
          cityName: 'Madrid',
          countryName: 'Spain'
        }
      },
      {
        name: 'AC Milan',
        clTitles: 7,
        domesticTitles: 18,
        clubAddress: {
          stadiumName: 'San Siro',
          cityName: 'Milan',
          countryName: 'Italy'
        }
      },
      {
        name: 'FC Bayern Munich',
        clTitles: 6,
        domesticTitles: 31,
        clubAddress: {
          stadiumName: 'Allianz Arena',
          cityName: 'Munich',
          countryName: 'Germany'
        }
      },
      {
        name: 'Liverpool',
        clTitles: 6,
        domesticTitles: 19,
        clubAddress: {
          stadiumName: 'Anfield',
          cityName: 'Liverpool',
          countryName: 'England'
        }
      },
      {
        name: 'Barcelona',
        clTitles: 5,
        domesticTitles: 26,
        clubAddress: {
          stadiumName: 'Camp Nou',
          cityName: 'Barcelona',
          countryName: 'Spain'
        }
      },
    ]
  }

  ngOnInit(): void {
  }

  toggleClubs() {
    this.showClubs = !this.showClubs;
  }

  togglePlayers() {
    this.showPlayers = !this.showPlayers
  }

}
