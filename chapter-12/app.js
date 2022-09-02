// // Async javaScript
// //  - Governs how we perform tasks which take some time to complete
// //   (e.g. Getting data from a database)
// // in simple words
// // Async javaScript code is code that can start now and finish it later



// // Synchronous javascript
// //  - javascript can run One statement at a time
// //  e.g.
// //  console.log('line one')
// //  console.log('line two')
// //  console.log('line three')

// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log('callback function is fired')
// }, 5000);
// console.log(4);
// console.log(5);

// this is the older way of the HTTP requests
// // HTTP Requests
// //  - make HTTP  requests to get data from another server
// //  - we make these requests to API endpoints

// // how to make request in javascript
// const getTodos = (callback) =>{
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         callback(undefined,data );
//     }else if(request.readyState === 4){
//         callback('could not fetch data', undefined);
//     }
//     });
//     request.open('GET','https://jsonplaceholder.typicode.com/todos/',true);
//     request.send();
// };
// console.log(1);
// console.log(2);
// console.log(3);

// getTodos((err,data)=>{
// console.log('callback is fireddd');
// console.log(err,data);
// if(err){
//     console.log(err);
// }else{
//     console.log(data);
// }
// });

// console.log(4);
// console.log(5);
// console.log(6);


// JSON operations
// const getJsonTodos = (resourse)=>{
// return new Promise((resolve, reject)=>{
//     const jsonRequest =new XMLHttpRequest();
//     jsonRequest.addEventListener('readystatechange',()=>{
//         if(jsonRequest.readyState === 4 && jsonRequest.status ===200 ){
//             const data = JSON.parse(jsonRequest.responseText);
//             resolve(data);
//         }else if(jsonRequest.readyState ===4){
//             reject('could not fetch data');            
//         };
//     });
//     jsonRequest.open('GET', resourse);
//     jsonRequest.send();
// });
// }; 

// getJsonTodos('todos/ali.json').then((data)=>{
//    console.log('promise 1 resolved: ',data);
//   return  getJsonTodos('todos/tariq.json')
// }).then((data)=>{
//     console.log('promise 2 resolved: ',data);
//     return getJsonTodos('todos/sameer.json')
// }).then((data)=>{
//     console.log('promise 3 resolved: ',data)
// }).catch((err)=>{
//     console.log('promise is rejected: ',err);
// });

// getJsonTodos('todos/tariq.json',(err, data)=>{
// console.log(data);
// // getJsonTodos('todos/sameer.json',(err,data)=>{
// //     console.log(data);
// //     // getJsonTodos('todos/ali.json',(err,data)=>{
// //     //     console.log(data);
// //     // })
// // });
// });


// promise example
// const getsomething =()=>{


//     return new Promise((resolve,reject)=>{
//         // fetch something
//         resolve('some data');
//         reject('some error');
//     });
// };

// // getting two functions in an argument is little bit confussing so a better way is below  
// // getsomething().then((data)=>{
    
// // },(err)=>{
// //     console.log(err)
// // });

// getsomething().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// });


// fetch API

// this is the new way of the http requsts

fetch('todos/tariq.json').then((response)=>{
// console.log('resolved: ',response)
return response.json();
}).then((data)=>{
    console.log('this data is the response.json(): ',data);
}).catch((err)=>{
console.log('reject:',err)
});



// Async & Await
 const getTodo = async ()=>{
    // ye await is fetch ko stop kere ga jb tak ye resolve nahi hoga or jab hoga uska data
    // response me store ho jaye ga
 const response = await fetch('todoss.json');
 if(response.status !==200){
    // ye syntax us error k liye agr hum apni marzi se koi error define krna chahte hain
    throw new Error('cannot fetch the data');
 }
//  yaha hum ne dubara await is liye lagaya hai Q k response.json() ik promise ko hi 
// return kr raha hai 
 const data = await response.json()
 return data;
 };
 getTodo()
 .then((data)=>{
    console.log('resolvedd: ',data)
 })
 .catch((err)=>{
    console.log('rejected:',err.message)
 });



