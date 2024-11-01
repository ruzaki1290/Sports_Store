// all our routes
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';

export const routes: Routes = [
    { path: '', component: StoreComponent},
    { path: 'store', component: StoreComponent},
    { path: 'cart', component: CartDetailComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: '**', redirectTo: "/store" } // Redirect any unknown paths to the store
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
