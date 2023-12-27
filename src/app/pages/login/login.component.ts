import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginInfo:any={
    username:"",
    password:""
  }
  constructor(private master:MasterService,private router:Router){}
  logIn(){
    this.master.logIn(this.loginInfo).subscribe((res:any)=>{
      if(res.result){
        // alert("login Successfully")
        localStorage.setItem('user',JSON.stringify(res.data))
        this.router.navigate([''],{ queryParams: { reload: true } })
      }else{
        alert(res.message)
      }
    })
  }
}
