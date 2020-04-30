import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {CovidService} from '../services/covid.service';
import { countryCodes } from '../variousCountryListFormats.js';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.css']
})
export class ValidatedFormComponent implements OnInit {

  countryCode: FormControl = new FormControl('');
  selectedCountry: string;
  isoCode: string;
  results: any;
  validCountry: boolean;
  ngOnInit(): void {
  }
  getStats() {
    console.log('Validated-form getStats() called.');
    this.selectedCountry = this.countryCode.value;
    console.log(this.selectedCountry);
    if (this.selectedCountry in countryCodes) {
      this.validCountry = true;
      this.cvd.getData(this.selectedCountry).subscribe(
        response => {
          console.log('subscribed!');
          console.log(response);
          this.results = response;
        }
      );
    } else {
      this.validCountry = false;
    }
  }

  constructor(private cvd: CovidService) { }
}
