function sum(a,b){
    // console.log(a+b);
    return a+b;
}
console.log(sum(10,20)); 

function sayHello(name){
    console.log("hello "+name);
}
sayHello("dhanush")
//default parameters
const sayHello=function(name="guest"){
    console.log("hello "+name);
}
sayHello()

const add=(a,b)=>{
return a+b;
}
console.log(add(10,20));