// // object literal notation
// const userOne = {
//     userName: 'tariq',
//     email: 'salikhan8458@gmail.com',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// };
// console.log(userOne.userName );
// console.log(userOne.email );
// userOne.login();

// const userTwo = {
//     userName: 'sameer',
//     email: 'tariqwc99@gmail.com',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// };
// console.log(userTwo.userName);
// console.log(userTwo.email );
// userOne.login();
// the above method is good if we want to make one or two objects
// but it will become very messy if we need so many objects

// new way to create an object

// const userThree = new Userone('tariqwc99@gmail.com','sameer ali khan');


// CLASSES 
//  - A class is like a blueprint for an object (it describes how one should be made)
// Car bluePrint
// properties                      Functionality
//  - its color                     - drive
//  - its model                     - reverse
//  - engine size                   - brake

// first of all we have to make a constructor function inside the class a construction function is a thing
// that actually construct an object and set properties on it
// In future when we say something like const userOne = new User{'sameer','salikhan8458@gmail.com'}
// what is this does to call the construction function inside the User class to set all the 
// properties on that new userOne object

// constructor functions
// this function USER  and the constructor inside the class User do the same work
function USER(username,email){
   this.username = username;
   this.email = email;
   // the way we declare or define a method in function
   this.login = function(){
      console.log(`${this.username} has loggedin`);
   }
}
const userONEe = new USER('sameer', 'salikhan@gmail.com');
console.log('the constructor function',userONEe);
userONEe.login();


class User {
    // here the usename and email act as  parameters
 constructor(username,email){
    // set up properties on the object
    this.userName = username;
    this.Email = email;
    this.score = 0;
 }
 login(){
    console.log(`${this.userName} just logged in`);
    return this;
 }
 logout(){
    console.log(`${this.userName} just logged out`);
    return this;
 }
 incScore(){
this.score += 1;
console.log(`${this.userName} has a score of ${this.score}`);
// return this means to return the instances of this function
return this;
 }
}
// INHERITENCE
// how do we attach username and email from the parent class or run the parent class constructor for child admin class
// and the way we do that is by calling super() inside the admin constructor
// wheneve we call the super() it looks for the parent class and in parent class it looks for constructor
class admin extends User{
    constructor(username,email,title){
        super(username,email);
        this.title = title;
    }
deleteuser(user){
users = users.filter((u)=>{
return u.userName !== user.userName
})
}
}
// here sameer and salikhan8458@gmail.com act as an arguments
const userOne = new User('sameer', 'salikhan@gmail.com');
const userTwo = new User('tariq','tariqwc99@gmail.com');
const userThree = new admin('ali','sameeralikhan@gmail.com','black-belt-ninja');

console.log(userOne, userTwo,userThree);
// userOne.login();
// userTwo.login();
// userOne.incScore();
// userOne.logout();
// userTwo.logout();
userOne.login().incScore().incScore().logout();


let users = [userOne,userTwo,userThree];
console.log(users);

userThree.deleteuser(userTwo);
console.log('usertwo is deleted',users)
//  the 'new' keyword
//  1 - it creates a new empty object{}
//  2 - it binds the value of 'this' keyword to the new empty object
//  3 - it calls the constructor function to 'build' the object



// PROTOTYPES
//  - Every object in javascript has a prototype
//  - prototype contain all the methods for that object type






