import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getChangeCoin(tengo: string, quiero: string, cantidad: number): Observable<any> {

    let coinResult = '';

    var myHeaders = new Headers();
    myHeaders.append("apikey", "oO66cl65R143rZd5CDXtAsTfTL9BVvXi");

    fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + tengo + "&from=" + quiero + "&amount=" + cantidad + "",
      {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      })
      .then(response => response.text())
      .then(result => coinResult == result)
      .catch(error => console.log('error', error));

    console.log(coinResult);
    return this.http.get(coinResult);
  }

}
