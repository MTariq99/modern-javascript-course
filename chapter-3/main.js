// for loops
let i = 0; 

for( i = 0; i<5; i++){
    console.log('in loop: ', i);
};
console.log('loop finished');

const names = ['sameer ', 'ali','khan'];
for( i = 0; i< names.length; i++){
    // console.log(names[i]);

let html = `<div>${names[i]}</div>`;
console.log(html);
}

// while loops

while(i<5){
    console.log('in while loop:',i);
    i++;
}

while(i<names.length){
    console.log('through while loop:', names[i]);
    i++;
}

// do while loops

do{
    console.log('val of i is :', i);
    i++;
}while(i<5);

// if statements
const age = 25;
if(age>20){
    console.log("you are over 20")
};

if(names.length>2){
    console.log("more than two names in an array");
};

const PAssword= 'password';
if(PAssword.length>=8){
    console.log("this password is long enough");
};

// else if statements
const Password = 'p@ss';
if(Password.length>=8){
    console.log("this is 8 character long password");
}else{
    console.log("the password is not long enough");
};

const password = 'passsword1234';
if(password.length>=12){
    console.log("this password is mighty strong");
} else if(password.length>=8){
    console.log("this password isn't enough");
}else{
    console.log("create strong password");
};
// .includes() it checks if the certain character is included or not

const pass = 'p@ss';
if(pass.length>=4 && pass.includes('@!')){
    console.log("yes @ is included in pass");
}else{
    console.log("@! is not included");
};

// variables & block scope

// global variable
let Age = 30;
if(true){
// block level scope variable 
// block level variable cannot be accessed outside the block scope
let name = 'tariq';
let AGe = 40;
console.log('block level variable:', AGe,name);
}
// here name will not print bacause name is block level variable not global
console.log('global variable: ', Age,name);

