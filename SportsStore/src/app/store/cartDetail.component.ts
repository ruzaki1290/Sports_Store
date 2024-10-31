import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
@Component({
selector: "app-cart-detail",
 templateUrl: './cartDetail.component.html'
})

export class CartDetailComponent {
  constructor(public cart: Cart, private router: Router) { }

  navigateToCheckout() {
    this.router.navigateByUrl('/checkout');
  }
 }
