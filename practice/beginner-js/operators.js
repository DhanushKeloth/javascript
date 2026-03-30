//arithmetic operators
a=10
b=2
console.log("arithmetic operators")
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log("\n")

//comparison operators
console.log("comparison operators")
console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log("\n")

//strict equality 
console.log("strict comparison operators")
num1=100
num2="100"
console.log(num1===num2)
console.log(num1!==num2)
console.log("\n")

//logical operators
console.log("logical operators")
console.log(a>b && a<b)
console.log(a<b || a>b)
console.log(!a)

//type coercion 
console.log(10+"20") ///string concatenation
console.log(10-"5") ///number substraction
console.log(10*"5") ///number multiplication

//explicit type conversion
console.log("explicit type conversion")
console.log(Number("10"))
console.log(String(10))
console.log(Boolean(0))


//spread operator
const groupA = ["dhanush","adhi","charan"]
const groupB=["sandeep","alex","john"]
const combined= [...groupA,...groupB]
console.log(combined)
const obj={
    name:"dhanush"}
const obj2={...obj,age:20}
console.log(obj2)


//rest operator

const sum = function(...nums){
    return nums.reduce((acc,current)=>acc+current,0)
}
console.log(sum(10,20,30,40,50))
console.log(sum(10,20))


