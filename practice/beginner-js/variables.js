let name="dhanush"
// let name="nayak" //cannot declare the name because let is block scoped
name = "anil" 
console.log(name) //overrides the value


//var demo
//this throws undefined because the var is global scoped 
//hoisting is setting up the memory before the actual execution of the code
console.log(a)
var a=10


// const demo 
const b=20
// b=30 //cannot change the value
console.log(b)


//block scoped
{
    const blockscoped = "this is block by var"
    console.log(blockscoped)
}
console.log(blockscoped) //throws error for let and consr because of block scoped