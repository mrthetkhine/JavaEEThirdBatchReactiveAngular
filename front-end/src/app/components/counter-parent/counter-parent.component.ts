import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HelloWorldComponent} from "../hello-world/hello-world.component";

@Component({
  selector: 'counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.scss']
})
export class CounterParentComponent implements OnInit {

  //@ViewChild(HelloWorldComponent) counter!:HelloWorldComponent;
  @ViewChild("counter") counter!:HelloWorldComponent;



  constructor() { }


  ngOnInit(): void {
  }
  resetCounter():void{
    console.log("Reset counter ");
    this.counter.reset();
  }
  parentMethod():void{
    console.log("Parent method called");
  }
}
