import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
