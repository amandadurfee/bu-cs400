import { Component } from '@angular/core';
import { COVID } from './COVID';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'USA, ITALY, CHINA - COVID 04/25';
  results: any;
  selectedCountry: COVID;

  selectCountry(c: COVID) {
    this.selectedCountry = c;
  }
}


