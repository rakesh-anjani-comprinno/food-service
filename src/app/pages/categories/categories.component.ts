import { Component,OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { MasterService } from "../../services/master.service"
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  foodCategory: any[] = [];
  constructor(private master:MasterService, private router:Router){}
  ngOnInit():void {
    this.loadAllFoodCategory()
  }
  loadAllFoodCategory(){
    this.master.getAllFoodCategory().subscribe((res:any) => {
      this.foodCategory= res.data;
    })
  }
  
}
