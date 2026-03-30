localStorage.setItem('name','dhanush');
localStorage.setItem('age', 30);

localStorage.removeItem('age');
const name = localStorage.getItem('name');
console.log(name);

sessionStorage.setItem('age',20);
const age = sessionStorage.getItem('age');
console.log(age);


const userProfile = {name:'adhi', age: 25};
localStorage.setItem('userProfile', JSON.stringify(userProfile))
const storedProfile = localStorage.getItem('userProfile');
console.log(JSON.parse(storedProfile));