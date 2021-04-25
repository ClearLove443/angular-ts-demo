import { Component, OnInit } from '@angular/core';
import { AddService } from './add.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:  [ AddService ]
})
export class DemoComponent  implements OnInit{

  // num1: number = 0;
  // num2: number = 0;
  // sum: number = 0;
  addNum = {
    num1: 0,
    num2: 0,
    sum: 0
  };
  constructor(private addService: AddService) {}
  ngOnInit(): void {
    // alert(this.s);
  }

  add(): void {
    // this.addNum.sum = this.addNum.num1 + this.addNum.num2;
    console.log('type:' + typeof this.addNum.sum);
    this.addNum.sum = this.addService.add(this.addNum.num1, this.addNum.num2);
  }
}
