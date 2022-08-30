// string
console.log('hello world');
let email = 'tariqwc99@gmail.com';
console.log(email)


// string concatenation
/* concatenation is used for joining strings 
 */
let firstname = 'Muhammad';
let lastname = 'Tariq';
let fullname = firstname + ' ' + lastname;
console.log(fullname);

// getting characters
/*getting character means that if we want the first alphabat of firstname
we can get that alphabat through square bracket notation
*/
console.log(fullname[9]);

// string length
console.log(fullname.length)
// string methods
/*there are several functions associated with the string they are known
as methods */
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result);

// the indexof() is used to find the index of a specific character 
let index = email.indexOf('@');
console.log(index);
let Index = email.lastIndexOf('l');
console.log(Index);
// slice method
// it takes a section or a part from the string
// the first argument mean from where and the second argument means till which character
let Slice = email.slice(2, 10);
console.log(Slice);
// replace() method it replaces a character 
let REPLACE = email.replace('t','S');
console.log(REPLACE);

// template strings
const title = 'the best reads of 2019';
const auther = 'Mario';
const likes = 30;

// concatenation way
let Result = 'the blog called ' + title + ' by ' + auther + ' has ' + 'likes ' + likes;
console.log(Result);
// template string way
let RESULT = `the blog called ${title} by ${auther} has ${likes} likes`;
console.log(RESULT);


// creating html template
let html = `
<h2>${title}</h2>
<p>${auther}</p>
<span>${likes}</span>
`;
console.log(html)


// ARRAYS
let ninja = ['sameer','ali','khan'];
// ninja[2] = 'afridi'
// console.log(ninja[1]);
// let ages = [20,30,35,40];
// console.log(ages);
// let random = ['Muhammad', 'Tariq',30,40];
// console.log(random);
// console.log(ninja.length);

// ARRAY METHODS
// join method
// it takes an array and joins all the element inside that array into a single string i.e
let  joinmethod = ninja.join(',');
console.log(joinmethod);
// indexof() method
let indexof = ninja.indexOf('sameer');
console.log(indexof);
// concatenate method 
// through this method we can add two arrays as well
let concatinate = ninja.concat(['I','love','you']);
console.log(concatinate);

// push method
// push method adds an element to the end of an array to the original array
 ninja.push('too');
console.log(ninja);
// pop method
// it removes the last element of the original array
let popup= ninja.pop();
// console.log(ninja);
// now if we store the popup in console the it will show the deleted value from the array
console.log(popup);
