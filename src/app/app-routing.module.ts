import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { SelectFoodComponent } from './pages/select-food/select-food.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:CategoriesComponent
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"registration",
        component:RegistrationComponent
      },
      {
        path:'restaurant-items/:categoryId',
        component:RestaurantItemsComponent
      },
      {
        path:'selected-items/:restaurantId/:categoryId',
        component:SelectFoodComponent
      },     
      {
        path:'orders',
        component:OrdersComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
