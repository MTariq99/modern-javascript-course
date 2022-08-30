//  function decleration
function greet(){
console.log('hello there');
};
// calling or invoking a function
greet();


// function expression
// anywhere you take one thing equal to another is known as expression
const speak = function(){
 console.log('good day!');
};
speak();

// Arguments & parameter
// here name acts as a parameter
const Speak = function(name,time){
    console.log(`good ${time} ${name}`);
};
// here tariq acts as a argument
Speak('tariq','morning');


// Returning Values
const SPeak = function(Name = 'luigi', Time = 'night'){
    console.log(`good ${Time} ${Name}`);
};
SPeak();
// below all the functions are same
// first type of function
const calcAreA = function(RAdius){
    let ARea = 3.14 * RAdius**2;
    console.log(ARea);
};
calcAreA(5);

// second type of function
const calcARea = function(RADius){
    return 3.14 * RADius**2;
};
const area = calcARea(6);
console.log(area);

// Arrow Function
// third type of function
const calcarea = (Radius) =>{
return 3.14 * Radius**2;
};
const Area = calcarea(3);
console.log('the area is : ',Area);

const gReet = () => {
    return 'hello, world';
};
console.log(gReet());


// fourth type of function
const CALcarea = RADIUS =>3.14 * RADIUS**2;
const AREA = CALcarea(9);
console.log('the area is now : ',AREA);

const Bill = function(Products, Tax){
    let Total = 0;
    for(let i =0; i< Products.length; i++){
        Total = Products[i] + Products[i] * Tax;
    }
    return Total;
};
console.log(Bill([10,20,30], 0.2));

// through arrow function
const bill = (products, tax) => {
    let total = 0;
    for(let i =0; i<products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
const billtax = bill([40,50,60],0.3);
console.log(billtax);

// callback & foreach
// callback means calling a function inside the parameters of another function

let people = ['tariq','sameer','ali','khan','afridi'];

const myfunc = (person) => {
    console.log(person);
};
people.forEach(myfunc);
// or we can code such as 

people.forEach((Person,index) => {
    console.log('another way of calling a callback function',index,Person);
});

// get a reference to the 'ul'

const ul = document.querySelector('.people');
let html = ``;
people.forEach((person) => {
// create html template
html += `<li style = "color:purple">${person}</li>`;
});
// console.log(html);
ul.innerHTML = html;



