import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

users = [
  {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
  {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
  {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
  {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
  ];

  createUser(user) {
    user._id = Math.floor(Math.random() * Math.floor(10000)).toString();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  
        return this.users[x]; 
      }
    }
  }

  findUserByUsername(username: string) { 
  // for (let x = 0; x < this.users.length; x++) {
  //     if (this.users[x].username === username) {  
  //       return this.users[x]; 
  //     }
  //   }
    return this.users.find(function(user) {
      return user.username === username;
    })
  }

  findUserByCredentials(username: string, password: string) { 
   for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {  
        return this.users[x]; 
      }
    }
  }

  updateUser(userId: string, user) { 
    var oldUser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;

  }

  deleteUser(userId) { 
     var oldUser = this.findUserById(userId);
     var index = this.users.indexOf(oldUser);
     this.users.splice(index, 1);
   }
}
