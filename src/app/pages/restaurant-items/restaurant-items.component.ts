import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.css'
})
export class RestaurantItemsComponent {
  categoryId:number=0;
  restaurantsByFoodCategory:any;

  constructor( private master:MasterService,private activatedRouter:ActivatedRoute,private router:Router){
    this.activatedRouter.params.subscribe((res:any)=>{
      this.categoryId = res.categoryId
      this.GetRestaurantServingByCategoryId()
    })

  }

  GetRestaurantServingByCategoryId(){
    this.master.getRestaurantServingByCategoryId(this.categoryId).subscribe((res:any)=>{
      if(res.result){
        this.restaurantsByFoodCategory=res.data
        debugger
      }
    })
  }
}
