import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  addNewUser:any = {
    "userId": 0,
    "userName": "",
    "role": "",
    "password": "",
    "mobileNo": "",
    "emailId": "",
    "restaurantId": 0
  }

  constructor(private master:MasterService, private router:Router){}
  
  Registration(){
    this.master.registration(this.addNewUser).subscribe((res:any)=>{
      if(res.result){
        alert("Registration Successfully")
        this.router.navigateByUrl('/login')
      }else{
        alert(res.message)
      }
    })
  }
}
