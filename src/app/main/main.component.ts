import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<div class="container">
                <router-outlet></router-outlet>
             </div>`,
  styles: ['.container { padding:30px; }']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
