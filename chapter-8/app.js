// querySelectors
const correctAnswers = ['B','B','B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');




// addEventListeners
form.addEventListener('submit', (e) =>{
e.preventDefault();

let score = 0;
const userAnswers = [form.Q1.value,form.Q2.value,form.Q3.value,form.Q4.value];
// check answers
userAnswers.forEach((answer,index) =>{
if(answer === correctAnswers[index]){
    score += 25;

}
});
// console.log(score);
// show result on page
scrollTo(0,0);
result.classList.remove('d-none');

let output = 0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
    } else {
        output++
    }

},10)
});

// window object (global object)
// console.log('hello world');
// window.console.log('hello');

// setTimeout() it takes two arguments the time and other function setTimeout checks
// for that parameter time and after that the function will execute
// setTimeout(()=>{
// alert('this is a setTimeout function')
// }, 9000);

// let i = 0;
//  const timer = setInterval(()=>{
//     console.log('hello');
//     i++;
//     if(i===5){
//         clearInterval(timer)
//     }
// }, 1000);