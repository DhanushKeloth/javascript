const btn = document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    console.log("button clicked");
})
const username = document.getElementById('username');
username.addEventListener('input',(e)=>{
    console.log("username changed",e.target.value);
    // var value = e.target.value;  
})
username.addEventListener('keydown',(e)=>{
    var value = e.target.value;
    if(e.key ==='Enter'){
        console.log(value)
    }
})


//event delegation
const list = document.getElementById('massive-list');
list.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        console.log(e.target.textContent);
    }
})


const email = document.getElementById('email')
const pwd = document.getElementById('pwd')
const form = document.getElementById('my-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("email:",email.value);
    
})


