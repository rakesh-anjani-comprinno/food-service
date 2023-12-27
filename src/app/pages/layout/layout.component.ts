import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  loggedData:any={}

  constructor(private activatedRouter:ActivatedRoute,private router:Router){  }

  checkUser():void{
    this.loggedData = localStorage.getItem('user')
    console.log("came")
    if(this.loggedData !== null){
      this.loggedData = JSON.parse(this.loggedData)
    }
  }

  ngOnInit(): void {
    this.checkUser()
    this.activatedRouter.queryParams.subscribe(params => {
      if (params['reload']) {
        this.checkUser()
      }
    });
  }
  
  logOut(){
    localStorage.removeItem('user')
    this.loggedData=undefined;
    this.router.navigateByUrl('')
    // alert("Logged Out Successfully")
  }
}
