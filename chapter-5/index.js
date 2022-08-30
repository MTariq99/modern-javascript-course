// OBJECTS
/*objects in real life have properties & things they can do.....
do means here method

a phone has different properties like
properties                      things phone can do
color                            - can ring
size                             - can take pictures
model                            - can play music

so the things phone can do is known as METHOD in javascript
*/

// object literals
let user = {
 /* key       values */ 
    name:    'crystal',
    age:      30,
    email:    'tariqwc@gmail.com',
    location:  'pakistan',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    // this is a method attached to the user object
    login: function(){
        console.log('user loggedIn');
    },
    logout: function(){
        console.log('logged out');
    },
    logBlogs: function(){
        /*'this' is used to access the key/keys of an abject inside the method of 
        that object
        without using 'this' we cannot access any key/keys of an object */
       console.log('this user has written the following blogs : ')
       this.blogs.forEach((blog,index) =>{
        console.log(blog,index);
       })
    }
};

console.log(user);
console.log(user.name);
// to change the value of any key inside the object
user.age = 35;
console.log(user.age);
// another way to update the key of object
user['email'] = 'salikhan@gmail.com';
console.log(user.email);
console.log(typeof user);

// calling a method from a an object
user.login();
user.logout();
user.logBlogs();


// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

// .round rounds a decimal to the nearest integer
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
// trunc ignores the decimal part
console.log(Math.trunc(area));

// generate random number
const random = Math.random();
console.log(random);
// generate random numbers between 1 and 100
console.log(Math.round(random * 100))

