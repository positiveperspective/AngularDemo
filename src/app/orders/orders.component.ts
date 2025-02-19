import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Observable } from 'rxjs';
import { IOrderDto } from '../dtos/iorder.dto';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  constructor(private _ordersService: OrdersService) {}

  orders$: Observable<IOrderDto[]> = this._ordersService.getCart();

}
