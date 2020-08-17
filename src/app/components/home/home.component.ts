import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Show } from '../../models/Show';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows:Show[];




  constructor() {

   }

  ngOnInit(): void {
this.shows = [{
  name: "Boondocks",
  id: 0,
  season: 4,
  episodes: 15
},
{
  name: "Rick and Morty",
  id: 1,
  season: 4,
  episodes: 15
},
{
  name: "Criminal Minds",
  id: 2,
  season: 7,
  episodes: 23
},
{
  name: "Empire",
  id: 3,
  season: 5,
  episodes: 18
},
{
  name: "Naruto",
  id: 4,
  season: 5,
  episodes: 35
},
{
  name: "Dragonball Z",
  id: 5,
  season: 9,
  episodes: 40
},
{
  name: "Family Guy",
  id: 6,
  season: 18,
  episodes: 21
},
{
  name: "The Simpsons",
  id: 7,
  season: 31,
  episodes: 24
},
{
  name: "Bojack Horseman",
  id: 7,
  season: 6,
  episodes: 16
}];



    // let shows = this.createShows("#EpisodeSelect");
    //this.switch();
  }

  randomSeason(): void {
    let lower = (<HTMLInputElement>document.getElementById('SL')).value
    let upper = (<HTMLInputElement>document.getElementById('SU')).value
    let res = Math.floor(Math.random() * +upper) + +lower;
    console.log(res);
    (<HTMLInputElement>document.getElementById('SC')).innerHTML = String(res);

  }

  randomEpisode(): void {
    let lower = (<HTMLInputElement>document.getElementById('EL')).value
    let upper = (<HTMLInputElement>document.getElementById('EU')).value
    let res = Math.floor(Math.random() * +upper) + +lower;
    console.log(res);
    (<HTMLInputElement>document.getElementById('EC')).innerHTML = String(res);

  }

  randomSeries(): void {
    let loSeries = document.querySelectorAll('.series-option')
    let loStrings = []

    // console.log(loSeries)
    for (let i = 0; i < loSeries.length; i++) {
      loStrings.push(loSeries[i].innerHTML)
    }
    // console.log(loStrings);


    let i = Math.floor(Math.random() * loSeries.length);
    let res = loStrings[i];
    (<HTMLInputElement>document.getElementById('SEC')).innerHTML = String(res);








    console.log("pleaase work")
    let sl = (<HTMLInputElement>document.getElementById('SL')).value;
    (<HTMLInputElement>document.getElementById('SU')).value = this.shows[i].season.toString();

  //console.log("sl is", su)
    //su = this.shows[i].season.toString();
    //console.log("sl is after", su)

    let el = (<HTMLInputElement>document.getElementById('EL')).value;
    (<HTMLInputElement>document.getElementById('EU')).value = this.shows[i].episodes.toString();

    // eu = this.shows[i].episodes.toString();

  }

  randomAll(): void {
    this.randomSeries();
    this.randomSeason();
    this.randomEpisode();
  }

  ngAfterViewInit() {


  console.log("option");



}

  switch(i): void {

console.log("clicked");

  console.log("pleaase work")
  let sl = (<HTMLInputElement>document.getElementById('SL')).value;
  (<HTMLInputElement>document.getElementById('SU')).value = this.shows[i].season.toString();

//console.log("sl is", su)
  //su = this.shows[i].season.toString();
  //console.log("sl is after", su)

  let el = (<HTMLInputElement>document.getElementById('EL')).value;
  (<HTMLInputElement>document.getElementById('EU')).value = this.shows[i].episodes.toString();

}


  /* custom drop down from w3 */

};
