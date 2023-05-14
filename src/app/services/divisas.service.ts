import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DivisasService {

  constructor(private http: HttpClient) {

    var myHeaders = new Headers();
    myHeaders.append("apikey", "oO66cl65R143rZd5CDXtAsTfTL9BVvXi");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
}
