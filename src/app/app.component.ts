import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdersComponent } from "./orders/orders.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularDemo';
}
