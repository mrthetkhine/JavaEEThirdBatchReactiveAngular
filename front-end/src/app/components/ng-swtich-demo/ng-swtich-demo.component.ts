import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swtich-demo',
  templateUrl: './ng-swtich-demo.component.html',
  styleUrls: ['./ng-swtich-demo.component.scss']
})
export class NgSwtichDemoComponent implements OnInit {

  userRole:string = "admin";
  constructor() { }

  ngOnInit(): void {
  }
  changeUser()
  {
    this.userRole ="user";
  }
}
