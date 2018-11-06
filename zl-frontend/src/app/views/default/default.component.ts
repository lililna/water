import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.router.navigateByUrl('/app/home');
  }

}
