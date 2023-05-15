import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getSimbolo() {

    const myHeaders = new Headers();
    myHeaders.append("apikey", "oO66cl65R143rZd5CDXtAsTfTL9BVvXi");

    fetch("https://api.apilayer.com/exchangerates_data/symbols", {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

}
