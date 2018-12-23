import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrdersDetailPageComponent } from './pages/orders-page/orders-detail-page/orders-detail-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'order', component: OrdersDetailPageComponent },
  { path: 'order/:number', component: OrdersDetailPageComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
