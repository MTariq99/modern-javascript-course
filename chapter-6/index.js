/*DOM = document object Model */
const Para = document.querySelector('.people');
console.log(Para);

// get all the p tages 
const Paras = document.querySelectorAll('p');
const paragraph = document.querySelector('.para');
console.log(paragraph);
console.log(Paras[0]);

// get an element by ID
const Title = document.getElementById('page-title')


// get element by their className
const PAra = document.getElementsByClassName('para');


// get element by their tagName
const tags = document.getElementsByTagName('p')

// change the text and color of a p tag

const para = document.querySelector('p');
// console.log(para.innerText)
// change the text of a paragraph
para.innerText = 'the text of p tag has changed';
// if we want to append the text
para.innerText += ' this will add the to the end of that p tag text'


// if we want to change the text of all p tags at once

const paras = document.querySelectorAll('p');
paras.forEach((para) =>{
    console.log(para.innerText);
    para.innerText += ' new text';
});

// now we will change the HTML 
const content = document.querySelector('.content');
// console.log(content.innerHTML);
content.innerHTML = '<h1>the tag has changed from p tag to h1</h1>';


const people = ['tariq','sameer','ali','khan'];
people.forEach((person) =>{
    content.innerHTML = `<p>${person}</p>`;
});
// operations on attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
// if we want to change an attribute or sets of attributes
// it takes two arguments first one which attribute i want to change second to which i change it to 
link.setAttribute('href','https://:www.thenetninjs.co.uk');
link.innerText = 'the net ninja website'; 

const msg = document.querySelector('.para');
// console.log(msg.getAttribute('id'));
msg.setAttribute('style','color:orange');

msg.style.margin = '50px';
msg.style.color = 'crimson';
msg.style.fontSize = '60px'
// for deleting any property
msg.style.margin = ' ';

// change classes in javascript

const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

const allParas = document.querySelectorAll('p');
allParas.forEach((p) =>{
   if(p.textContent.includes('error')){
    p.classList.add('error');
   }else if(p.textContent.includes('success')){
    p.classList.add('success');
   };
});
 const abc = () =>{
    document.getElementById('heading').classList.toggle('success')
};
document.getElementById('heading').addEventListener('mouseenter',abc);

const title = document.querySelector('.title');
title.classList.toggle('succes');

const article = document.querySelector('article');
console.log(article.children);
Array.from(article.children);
console.log(Array.from(article.children));
Array.from(article.children).forEach((child) => {
    child.classList.add('article-element');
});

const heading = document.querySelector('h2');
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.nextElementSibling);


// Events
const Button = document.querySelector('button');

Button.addEventListener('click',() =>{
console.log('you clicked me');
});
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () =>{
//  ul.innerHTML += '<li> something new </li>';
const li = document.createElement('li');
li.textContent = 'something new to do';
ul.append(li);
// ul.prepend(li);
});


const items = document.querySelectorAll('li');
items.forEach((item) =>{
    item.addEventListener('click', (e) =>{
        // console.log(e.target);
        // console.log(e);
        // console.log(item );
        // e.target.style.textDecoration = 'line-through';
        e.target.style.backgroundColor = 'crimson';
        e.target.style.color = 'white';
        e.stopPropagation();
        // e.target.remove();

    });
});
ul.addEventListener('click', (e) =>{
    console.log('event on ul');
    if(e.target.tagName ==='LI'){
        e.target.remove();
    }
});



const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () =>{
    console.log('my content is copyright');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', (e)=>{
// console.log(e.offsetX,e.offsetY);
box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
});
document.addEventListener('wheel', (e) =>{
    console.log(e.pageX, e.pageY);
});


// query selectors
const buttoon = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupclose = document.querySelector('.popup-close')



// eventListeners
buttoon.addEventListener('click', ()=>{
    popupWrapper.style.display = 'block';
});
popupclose.addEventListener('click', ()=>{
    popupWrapper.style.display = 'none';
});
popupWrapper.addEventListener('click', ()=>{
    popupWrapper.style.display = 'none';
});

