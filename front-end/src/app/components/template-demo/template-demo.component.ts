import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.scss']
})
export class TemplateDemoComponent implements OnInit {

  today:Date = new Date();
  isDiabled:boolean = false;
  isPrimary = false;
  isOutline = false;
  constructor() { }

  ngOnInit(): void {
  }
  getString():string{
    console.log("GetString called");
    return "Template <script>alert(\"evil never sleeps\")</script> Syntax"
  }
  toggle()
  {
    this.isDiabled = !this.isDiabled;
  }
  setPrimary()
  {
    this.isPrimary = !this.isPrimary;
  }
}
