export class User{
	_id:string;
	username:string;
	password:string;
	firstName:string;
	lastName:string;
	email: string;

	constructor(id, username, password, firstName, lastName,email){
		this._id =id;
		this.username = username;
		this.username = password;
		this.username = firstName;
		this.username = lastName;
		this.email = email;
	}
}