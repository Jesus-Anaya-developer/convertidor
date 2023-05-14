import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(
    private http: HttpClient
  ) {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "oO66cl65R143rZd5CDXtAsTfTL9BVvXi");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  }
}
