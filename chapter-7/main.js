// Query selectors
const signupForm = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const userNamePattern = /^[a-zA-Z]{6,12}$/;



// EventListeners
signupForm.addEventListener('submit', (e)=>{
e.preventDefault();
// console.log(username.value)
console.log(signupForm.username.value);
});

// testing RegEx
const username = 'sameer';
// regular expression
// /^[a-z]{6,10}$/ is expression me ^ $ ka matlb hai k jo word aap test kr rahe hain
// uske aagy ya peche kuch bhi nahi hona chahiye warna test fail ho jaye ga
const pattern = /[a-z]{6,10}/;

let result = pattern.test(username);
if(result){
    console.log('regEx test passed');
}else{
    console.log('regEx test failed');
};

const UserName = '2348sameeralikhan2345!@';
const Result = UserName.search(pattern);
console.log(Result);


signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // validation
    const USerName = signupForm.username.value;

    if(userNamePattern.test(USerName)){
        feedback.textContent = 'The userName is valid';
    }else{
        feedback.textContent = 'the UserName must contain only alphabets between 6 and 12'
    }
});


// live feedback

signupForm.username.addEventListener('keyup', (e)=>{
    e.preventDefault();
    // console.log(e.target.value,signupForm.username.value );
    if(userNamePattern.test(e.target.value)){
        signupForm.username.setAttribute('class', 'userNamePatternSuccess')
    }else{
        signupForm.username.setAttribute('class', 'userNamePatternFail') 
    };
});