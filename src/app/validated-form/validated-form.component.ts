import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {CovidService} from '../services/covid.service';
import {COVID} from '../COVID';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.css']
})
export class ValidatedFormComponent implements OnInit {

  countryCode: FormControl = new FormControl('');
  selectedCountry: string;
  results: any;
  ngOnInit(): void {
  }
  getStats() {
    console.log('Validated-form getStats() called.');
    this.selectedCountry = this.countryCode.value;
    this.cvd.getData(this.selectedCountry).subscribe(
      response => {
        console.log('subscribed!');
        console.log(response);
        this.results = response;
      }
    );
  }

  constructor(private cvd: CovidService) { }
}
