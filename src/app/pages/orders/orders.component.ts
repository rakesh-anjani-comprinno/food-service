import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  userId:any;
  allOrders : any = [];

  constructor(private master:MasterService){
    const loggedData = localStorage.getItem('user')
    if(loggedData !== null){
      this.userId = JSON.parse(loggedData).userId
      this.GetAllOrdersByUserId();
    }
  }

  GetAllOrdersByUserId(){
    this.master.GetAllOrdersByUserId(this.userId).subscribe((res:any)=> {
      if(res.result){
        this.allOrders = res.data
      }
    })
  }
  
}
