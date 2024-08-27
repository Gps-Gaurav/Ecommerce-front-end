import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductsComponent } from './seller-add-products/seller-add-products.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'seller-auth', component: SellerAuthComponent
  },
  {
    path: 'seller-home', component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-add-products', component: SellerAddProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-update-products/:id', component: SellerUpdateProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search/:query', component: SearchComponent,

  },
  {
    path: 'details/:productId', component: ProductDetailsComponent,

  },
  {
    path: 'user-auth', component: UserAuthComponent,

  },
  {

    path: 'cart-page', component: CartPageComponent
  },
  {

    path: 'checkout', component: CheckoutComponent
  },
  {

    path: 'my-orders', component: MyOrdersComponent
  },
  {

    path: 'order-details', component: OrderDetailsComponent
  },
  {

    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
