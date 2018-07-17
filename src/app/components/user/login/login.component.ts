import { Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms'
import{ UserService } from '../../../services/user.service.client'
import{SharedService} from '../../../services/shared.service.client'
import {User} from '../../../models/user.model.client'
import{ Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@ViewChild('f') loginForm:NgForm;


username: string;
password:string;
errorFlag:boolean;

  constructor(private sharedService: SharedService,private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

login(){
	// console.log(this.loginForm.value.username);
	this.username=this.loginForm.value.username;
	this.password=this.loginForm.value.password;

  this.userService.login(this.username, this.password).subscribe(
    (user:User) => {
      if(!user) {
      this.errorFLag = true;

     } else {
       this.errorFlag = false;
       this.sharedService.user = user;
       this.router.navigate(['user']);
     }
   
    },
    (error:any) => {
      this.errorFlag = true;
    }
    );

  // this.userService.findUserByCredentials(this.username,this.password).subscribe(
  //   (user:User) => {
  //     if(user){
  //   this.errorFlag = false;
  //   this.router.navigate(['user', user._id]);
  //   }else {
  //     this.errorFlag =true;

  //   }
  //   },
  //   (error:any) => {
  //     this.errorFlag = true;

  //   }
  //   )

}

}








