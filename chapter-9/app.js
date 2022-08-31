const scores = [10,15,20,35,30,35,40,45,50];


// filter() array
const filteredScores =  scores.filter((score)=>{
    return score > 25;
});
console.log(filteredScores);
 
const users = [
    {name: 'shaun', premium:true},
    {name: 'yoshi', premium:false},
    {name: 'mario', premium:true},
    {name: 'chun-li', premium:false},
    {name: 'sameer', premium:false},
    {name: 'tariq', premium:true},
    {name: 'afridi', premium:false}
];

const premiumUsers = users.filter((user)=>{
return user.premium ;
});
console.log(premiumUsers);


// Map method

const prices =[10,15,20,35,30,35,40,45,50];
const salePrices = prices.map((price)=>{
return price * 2;
});
console.log(salePrices);

const products = [
    {name:'gold star', price : 20},
    {name:'gold star', price : 40},
    {name:'gold star', price : 50},
    {name:'gold star', price : 60},
    {name:'gold star', price : 90},
    {name:'gold star', price : 120},
    {name:'gold star', price : 220},
    {name:'gold star', price : 320}
];

const procductPrices = products.map((product)=>{
 if(product.price  > 50){
    return {name:product.name,price:product.price /2 };
 }else{
    return product;
 }
});
console.log(procductPrices);


// reduce method
// reduce method does not return an array it only returns a number based on a certain condition


const playerScores = [10,15,20,35,30,35,40,45,50,55];

const scoresResult = playerScores.reduce((acc, curr)=>{
   if(curr > 50){
    acc++;
   }else{
    return acc
   }
},0); 
console.log(scoresResult);

const playerscores = [
    {player:'mario', score:50},
    {player:'yoshi', score:150},
    {player:'mario', score:250},
    {player:'tariq', score:350},
    {player:'sameer', score:450},
    {player:'ali', score:450},
    {player:'khan', score:550},
    {player:'sameer', score:650},
    {player:'mario', score:550},
    {player:'yoshi', score:150},
    {player:'mario', score:250},
    {player:'tariq', score:350},
    {player:'sameer', score:450},
    {player:'ali', score:450},
    {player:'khan', score:550},
    {player:'sameer', score:650},
    {player:'mario', score:80},
    {player:'yoshi', score:150},
    {player:'mario', score:20},
    {player:'tariq', score:350},
    {player:'sameer', score:450},
    {player:'ali', score:450},
    {player:'khan', score:550},
    {player:'sameer', score:650}
];

const marioTotal = playerscores.reduce((acc,curr)=>{
    if(curr.player ==='mario'){
        acc +=curr.score;
    }
    return acc;
},0);
console.log(marioTotal);




// find method
// find method will itrate the array untill a certain condition as soon as the condition is passed
// find method will stop itrating on the remaining elements of that array
// OR 
// this method returns the value of the first array element that 
// satisfies the provided test function 

 const findScore =  [10,15,20,35,30,35,40,45,50,60,70,71,83];

 const firstHighScore = findScore.find((score)=>{
    return score > 50;
 });
 console.log(firstHighScore);


//  SORTING

// example 1 - sorting strings
const names = ['mario','tariq','sameer','ali','khan'];
 const sortedNames = names.sort();
 const sortedName = names.reverse();
 console.log(sortedNames);


// example 2 - sorting numbers
// sorting method on numbers it only sorts single digits 
 const sortingNumberss =  [10,15,20,35,30,35,1,40,45,50,60,,2,70,71,83,5];
// const sortedNumbers = sortingNumberss.sort();
const sortednumbr = sortingNumberss.sort((a,b)=>{
    b - a;
});
console.log(sortednumbr,sortingNumberss)
// console.log(sortedNumbers);


//  example 3 - sorting objects

const sortingObjects = [
    {player:'mario', score:50},
    {player:'yoshi', score:150},
    {player:'mario', score:250},
    {player:'tariq', score:350},
    {player:'sameer', score:450},
    {player:'ali', score:450},
    {player:'khan', score:550},
    {player:'sameer', score:650}
];
const sortedobject = sortingObjects.sort((a,b)=>{
if(a.score > b.score){
    return -1;
}else if(b.score>a.score){
    return +1
}else{
 return 0;
}
});

console.log(sortedobject);


// following are two methods to work with multiple arrays methods at once

// method 1

// filter returns an array
const filteredobjectsss =  products.filter((product)=>{
    return product.price > 50;
});
// map works on an array and returns an array as well
const promoss = filteredobjectsss.map((productsssss)=>{
return `the ${productsssss.name} is ${productsssss.price / 2} pounds`
});
console.log(promoss);

// method 2

const promos = products.filter((proooduct)=>{
        return proooduct.price > 50;
    }).map((prooductsssss)=>{
        return `the ${prooductsssss.name} is ${prooductsssss.price / 2} pounds`
     });

     console.log(promos);
