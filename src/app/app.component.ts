import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  isDisplay = false;
  age = 17
  customerDetails = ['Kamesh', 'abi', 'suriyaa']
  student = [{
    'rollNo': 1, 'name': 'Kamesh', 'job': 'ASE'
  }, {
    'rollNo': 2, 'name': 'Suriyaa', 'job': 'ASE'
  },
  { 'rollNo': 3, 'name': 'Sreenath', 'job': 'ASE' }]
  flag:boolean=false;
  displayValue:string="show"
  toggleDisplay(){
    this.flag=!this.flag
    this.flag?this.displayValue="hide":this.displayValue="show"
  }
  isPresent = true
  companyName:string= "accenture"
  loc:string="CDC"
  today = new Date();

  customer=[{'nam':'Kamesh','gender':'Male'},{'nam':'srivi','gender':'female'}]
  //   empName:string="Kamesh"
  //  imagePath = './assets/image1.jpg'
  //  num:number=0
  //   displayName(){
  //     console.log(this.empName)
  //     alert(this.title)
  //   }
  //   increment(){
  //   this.num = this.num +1
  //   }
  //   decrement(){
  //     this.num = this.num - 1
  //   }
}
