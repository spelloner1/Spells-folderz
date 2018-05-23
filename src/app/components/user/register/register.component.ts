import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{userService} from '../../../services/user.service.client'
import {User} from '../../../models/user.model.client'
import{ Router} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	@ViewChild('f') registerForm: NgForm;
	
	username:string;
	password:string;
	verifyPassword:string;
	passwordError:boolean;
	usernameError:boolean;
  

  constructor(private userService:User, private router:Router) { }

  ngOnInit() {
  }
  register(){
  	this.username = this.registerForm.value.username;
  	this.password = this.registerForm.value.password;
  	this.verifyPasswword = this.registerForm.value.verifyPassword;
  
  	if(this.password !== this.verifyPassword){
  		alert("Two passwords are not matching!")
  		this.passwordError = true;
  		this.usernameError =false;
	}else{
		
		this.passwordError = false;

		const user: User= this.userService.findUserByUsername(this.username)
		if(user){
			this.usernameError =true;
			

		} else {
  			this.usernameError = false;
  			this.passwordError = false;
  			const newUser: User = {
  				_id: "",
				username: this.username,
				password: this.password,
				firstName: "",
				lastName: "",
				email: ""
  			};
  			this.userService.createUser(newUser);
  			var id: string = this.userService.findUserByUsername(this.username)._id
  			this.router.navigate(['user', id]);
  		}
  	}
  }
}
