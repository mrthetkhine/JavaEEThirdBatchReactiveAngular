import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  messages: Array<string> = ["apple","orange","banana"];
  counter :number = 0;
  constructor() {
    console.log("HelloWorldComponent constructor");
  }

  ngOnChanges():void{
    console.log("HelloWorldComponent ngOnChanges");
  }
  ngOnInit(): void {
    console.log("HelloWorldComponent NgInit");
  }
  ngDoCheck():void{
    console.log("HelloWorldComponent ngDoCheck");
  }
  ngAfterContentInit():void{
    console.log("HelloWorldComponent ngAfterContentInit");
  }
  ngAfterViewInit():void{
    console.log("HelloWorldComponent ngAfterViewInit");
  }
  ngOnDestroy():void
  {
    console.log("HelloWorldComponent ngOnDestroy");
  }
  inc()
  {
    this.counter ++;
  }
  dec()
  {
    this.counter--;
  }
  clickOnMessage(msg:string)
  {
    console.log("Click on message ",msg);
  }
}
