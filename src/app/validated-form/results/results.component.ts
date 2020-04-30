import { Component, OnInit, Input } from '@angular/core';
import {COVID} from '../../COVID';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() selectedCountry: COVID;
  @Input() results: any;
  @Input() validCountry: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
