import { Component, OnInit } from '@angular/core';
import { Student } from './shared/model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oefening_H4';
  clicks : number = 0;
  valueBlur: string;
  valueFocus: string;
  studenten: Student[];

  constructor(){}

  ngOnInit(){
    this.studenten = [
      new Student(1,'Janssens'),
      new Student(2, 'Vermeulen'),
      new Student(3, 'Azis'),
      new Student(4, 'Plancaert')
    ]
  }

  btnClick(){
    this.clicks++;
    alert("You clicked the button " + this.clicks + " times!");
    console.log("You clicked the button " + this.clicks + " times!");
  }

  blurText(value: string){
    this.valueBlur = value;
    //console.log(event.target.value);
  }

  focusText(value: string){
    this.valueFocus = value;
  }

  mouseEnter(){
    console.log("mouse entered the button")
  }

  mouseLeave(){
    console.log("this mouse is leaving the button")
  }

  mouseClick(element: HTMLElement){
    element.style.backgroundColor = 'red';
  }

  mouseRelease(element: HTMLElement){
    element.style.backgroundColor = 'blue';
  }

  keyUpEnter(value: string){
    alert("You entered " + value + " .");
    console.log("You entered " + value + " .");
  }

  addStudent(value: string){
    let nieuweStudent = new Student(
      this.studenten.length+1,
      value
    )

    
    this.studenten.push(nieuweStudent);
  }
}
