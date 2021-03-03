import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string;
  date:string;
  amount:number;
  milles:number;

  onMillesChnage = (milles: string)=>{
    this.milles = parseFloat(milles);
  }
  onNameChange = (name: string)=>{
    this.name = name;
  }
  onDateChange = (date: string)=>{
    this.date = date;
  }
  onAmountChange = (amount: string)=>{
    this.amount = parseFloat(amount);
  }

  
}
