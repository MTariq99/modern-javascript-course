// // store data in local storage
// // it takes two arguments first is the name of the  key and second argument is the value of that key
// localStorage.setItem('firstName','tariq');
// localStorage.setItem('lastName','Khan');
// localStorage.setItem('age',23);


// // get data from local storage
// let firstName = localStorage.getItem('firstName');
// let lastName = localStorage.getItem('lastName');
// let age = localStorage.getItem('age');




// // updating data
// localStorage.setItem('firstName','Sameer Ali');
// name = localStorage.getItem('firstName');
// // we can also update by dot method
// localStorage.age = '25';
// age = localStorage.getItem('age');
// console.log(name);
// console.log(lastName);
// console.log(age);

// // deleting data from local storage
// localStorage.removeItem('name');
// localStorage.clear();

// name = localStorage.getItem('name');
// console.log(name);

const todos = [
    {Text:'paly mariokart',auther:'shaun'},
    {Text:'buy some milk',auther:'sameer'},
    {Text:'buy some bread',auther:'ali'},
    {Text:'buy some cookie',auther:'khan'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));

const storedData = localStorage.getItem('todos');
console.log(JSON.parse(storedData));

