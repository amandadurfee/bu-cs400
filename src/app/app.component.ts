import { Component } from '@angular/core';
import { COVID } from './COVID';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Covid Values: Confirmed, Dead, and Recovered';
  selectedCountry: COVID;

  selectCountry(c: COVID) {
    this.selectedCountry = c;
  }
}


