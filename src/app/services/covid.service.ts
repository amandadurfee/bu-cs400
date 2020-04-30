import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CovidService {

  getData(countryCode: string) {
    const results = this.http.get('http://localhost:3000/' + countryCode);
    console.log(results);
    return results;
  }
  constructor(private http: HttpClient) { }
}
