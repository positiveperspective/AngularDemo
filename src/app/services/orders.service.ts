import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderDto } from '../dtos/iorder.dto';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http://localhost:5232';
  
  private _ordersUrl = `${this.baseUrl}/Orders`;

  constructor(private _httpClient: HttpClient) { }

  getCart(): Observable<IOrderDto[]> {
    return this._httpClient.get<IOrderDto[]>(`${this._ordersUrl}/Cart`);
  }
}
