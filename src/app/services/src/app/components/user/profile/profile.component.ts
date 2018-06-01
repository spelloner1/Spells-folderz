import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{UserService} from '../../../services/user.service.client'
import {User} from '../../../models/user.model.client'
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	@ViewChild('f') profileForm:NgForm;

	uid:string;
	user:User;
	username:string;
	email:string;
	firstName:string;
	lastName:string;
	oldUsername:string;
	usernameTaken: boolean;
	submitSuccess:boolean;

  constructor(private activatedRoute: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
  	
  // 	this.activatedRoute.params.subscribe(
  // 		function info(params){
  // 			this.uid = params['uid'];
  // 			this.user =this.userService.finduserById(this.uid);
  // 			this.username = this.user.username;
  // 			this.email = this.user.email;
  // 			this.firstName = this.user.firstName;
  // 			this.lastName = this.user.lastName;
  // 		}.bind(this));
  // }
  this.activatedRoute.params.subscribe(
  	 (params) => {
  		this.uid = params ['uid'];
  		this.user = this.userService.findUserById(this.uid);
  		this.username = this.user.username;
  		this.email. = this.user.email;
  		this.firstName = this.user.firstName;
  		this.lastName = this.user.lastName;
  		this.oldUsername = this.user.username
  	})
}
  update(){
  	this.username = this.profileForm.value.username;
  	this.username = this.profileForm.value.email;
  	this.firstName = this.profileForm.value.firstName;
  	this.lastName = this.profileForm.value.lastName;

  	// check if the new username is taken or the username was not changed
  	const aUser : User= this.userService.findUserByUsername(this.username);
  	if(aUser && this.oldUsername ! == this.username){
  		this.usernameTaken = true;
  		this.submitSuccess = false;
  		}else{
  			const updatedUser: User = {
  				_id: this.user._id,
  				username : this.username,
  				password: this.user.password,
  				firstName:this.firstName,
  				lastName: this.lastName,
  				email: this.email
  			}
  			this.userService.updateUser(this.uid, updatedUser);
  		this.usernameTaken = false;
  		this.submitSuccess = true;
  	}

  }
}
