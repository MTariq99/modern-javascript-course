const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search');

const generateTemplate = (d)=>{
const html = `        <li class="list-group-item d-flex justify-content-between align-items-center">
<span>${d}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;
list.innerHTML += html;
}



// addEventListeners
addform.addEventListener('submit',(e)=>{
e.preventDefault();
// trim() method ignores any whitespace before or after a string
 const todo = addform.add.value.trim();
if(todo.length){
 generateTemplate(todo);
 addform.reset();
}
});

// delete todos
list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
     // console.log(e.target.parentElement.remove());
     e.target.parentElement.remove();
    } 
 });

//  Array.from makes an array of HTMLcollections
const filterTodos = (term) => {
Array.from(list.children)
.filter((todo) => {
    return  !todo.textContent.includes(term)
})
.forEach((todoss) => {
    return todoss.classList.add('filtered')
});

Array.from(list.children)
.filter((todo) => {
    return  todo.textContent.includes(term)
})
.forEach((todoss) => {
    return todoss.classList.remove('filtered')
});

// Array.from(list.children)
// .filter((todo)=> !todo.textContent.includes(term))
// .forEach((todo)=> todo.classList.remove('filtered'));
};

//  keyup event
// The onkeyup event occurs when the user releases a key (on the keyboard)
search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    filterTodos(term);
});