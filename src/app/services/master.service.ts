import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { combineLatest, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  endPoint:string="https://freeapi.miniprojectideas.com/api/zomato"

  constructor(private http:HttpClient) { }

  getAllFoodCategory(){
    return this.http.get(this.endPoint+"/GetAllFoodCategory")
  }

  registration(obj:any){
    return this.http.post(this.endPoint+"/AddNewUser",obj)
  }

  logIn(obj:any){
    return this.http.post(this.endPoint+"/Login",obj)
  }

  getRestaurantServingByCategoryId(id:number){
    return this.http.get(this.endPoint+"/GetRestaurantServingByCategoryId?categoryId="+id)
  }

  allFoodsOfRestaurantByCategory(restaurantId:number,categoryId:number){
    return this.http.get(this.endPoint+"/GetFoodItemOfRestaurantByCategory?restaurantId="+restaurantId+"&categoryId="+categoryId)
  }

  getRestaurantByRestaurantId(id:number){
    return this.http.get(this.endPoint+"/GetRestaurantByRestaurantId?restaurantID="+id)
  }

  getAllCartByCustomerIdAndRestaurantId(customerId:number,restaurantId:number){
    return this.http.get(this.endPoint+"/GetCartItemsByCustomerIdForRestaurant?customerId="+ customerId +"&restaurantId=" + restaurantId)
  }

  addToCart(obj:any){
    return this.http.post(this.endPoint+"/AddToCart",obj)
  }

  updateCartQuantity(obj:any){
    return this.http.post(this.endPoint + "/UpdateCartQuantity",obj)
  }

  placeOrder(obj:any){
    return this.http.post(this.endPoint + "/AddNewOrder" ,obj)
  }

  GetAllOrdersByUserId(id:number){
    return this.http.get(this.endPoint + "/GetAllOrdersByUserId?userId=" + id)
  }
}
