import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent {

  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'MXN';
  total: number = 0
  moneda: any = []

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getSimbolo();
  }

  convertir() {
  }

}
