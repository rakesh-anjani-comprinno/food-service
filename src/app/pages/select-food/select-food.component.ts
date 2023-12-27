import { Component } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router"
import { MasterService } from '../../services/master.service';
@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrl: './select-food.component.css'
})
export class SelectFoodComponent {

  restaurantId:number=0;
  categoryId:number=0;
  customerId:number=0;
  totalAmount:number=0;
  address:string="";

  cartItems:any=[];
  
  restaurantInfo:any={};
  foodsOfRestaurantByCategoryId:any=[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private master:MasterService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.restaurantId=res.restaurantId;
      this.categoryId=res.categoryId
      this.allFoodsOfRestaurantByCategory()
      this.getRestaurantByRestaurantId()
    })
    const loggedData = localStorage.getItem('user')
    if(loggedData !== null){
      const data = JSON.parse(loggedData)
      this.customerId = data.userId;
      this.getAllCartByCustomerIdAndRestaurantId();
    }
  }

  allFoodsOfRestaurantByCategory(){
    this.master.allFoodsOfRestaurantByCategory(this.restaurantId,this.categoryId).subscribe((res:any)=>{
      if(res.result){
        this.foodsOfRestaurantByCategoryId=res.data
      }
    })
  }

  getRestaurantByRestaurantId(){
    this.master.getRestaurantByRestaurantId(this.restaurantId).subscribe((res:any)=>{
      if(res.result){
        this.restaurantInfo = res.data;
      }
    })
  }

  getAllCartByCustomerIdAndRestaurantId(){
    this.master.getAllCartByCustomerIdAndRestaurantId(this.customerId,this.restaurantId).subscribe((res:any)=>{
      if(res.result){
        this.cartItems = res.data
        this.totalAmount = this.cartItems.reduce((accumulator:number,obj:any) => { return accumulator + obj.price * obj.quantity},0)
      }
    })
  }

  addToCart(itemID:number){
    if(this.customerId === 0){
      this.router.navigateByUrl("login")
    }else{
      const cartInfo = {
        "customerId": this.customerId,
        "itemId": itemID,
        "quantity":1,
      }
      this.master.addToCart(cartInfo).subscribe((res:any) => {
        if(res.data){
          this.getAllCartByCustomerIdAndRestaurantId()
          alert("Item has been added !")
        }
      })      
    }
  }

  decQuantity(item:any){
    const obj = {
      "customerId": this.customerId,
      "itemId": item.itemID,
      "quantity": item.quantity - 1 ,
    }
    this.master.updateCartQuantity(obj).subscribe((res:any)=> {
      if(res.result){
        alert("Item has been removed !")
        this.getAllCartByCustomerIdAndRestaurantId()
      }
    })
  }

  placeOrder(){
    const obj = {
      "userId": this.customerId,
      "totalAmount": this.totalAmount,
      "restaurantId": this.restaurantId,
      "deliveryAddress": this.address,
    }
    this.master.placeOrder(obj).subscribe((res:any)=>{
      if(res.result){
        alert("Order Placed successfully !")
        this.getAllCartByCustomerIdAndRestaurantId();
      }
    })
  }

  
}
