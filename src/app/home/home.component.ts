import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInput: string;

  constructor() { }

  ngOnInit() {
  }

  onInput(event: Event) {
    console.log(event);
    this.userInput = (event.target as HTMLInputElement).value;
  }

}
