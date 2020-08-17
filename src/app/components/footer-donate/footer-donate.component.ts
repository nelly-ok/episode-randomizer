import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-donate',
  templateUrl: './footer-donate.component.html',
  styleUrls: ['./footer-donate.component.css']
})
export class FooterDonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(x){console.log(x);}
}
