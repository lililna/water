import { Component, OnInit } from '@angular/core';
import {HomeContentServices} from "./snippets/services/services.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homedata: HomeContentServices) { }

  ngOnInit() {
  }
  ceshi() {
    console.log(1);
    this.homedata.getLeftMenu().subscribe(value => {
      console.log(value);
    });
  }
}
