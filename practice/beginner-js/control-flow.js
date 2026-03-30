const num=10

if(num==0){
    console.log("num is zero")
}
else if(num>0){
    console.log("num is positive")
}
else{
    console.log("num is negative")
}

const membership="free"
switch (membership){
    case "pro":
        console.log("pro")
        break
    case "free":
        console.log("free")
        break
    default:
        console.log("guest")
        break
}


//loops
for(let i=0;i<5;i++){
    console.log(i);
}
console.log("while loop")
let count=0
while(count<5){
    console.log(count)
    count++
}

//for..of loop
//gets the direct value 
console.log("for of loop")
const arr =[10,20,30,40,50]
for(let i of arr){
    console.log(i)
}

//for..in 
//gets the index value
console.log("for in loop")
const obj={
    name:"dhanush",
    age:20
}
for(let i in obj){
    console.log(i+": "+obj[i])
    
}
