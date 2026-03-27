//stringss
firstname = "dhanush"
console.log("my name is "+firstname)
console.log(typeof(firstname))

//numder
a=10.12
console.log(typeof(a))
let expo = 2e3
console.log(expo)

//boolean
isloggedin= true
console.log(typeof(isloggedin))

//undefined
var b
console.log(typeof(b)) //undefined

const result = null
console.log(typeof(result)) //null is a data type but type of null throws object as output

//arrays
const arr = [1,2,3,4,5]
const cities=["hyd","bangalore","chennai","delhi",1,true]
console.log(cities)
console.log(typeof(arr))
console.log(arr)
console.log(Array.isArray(arr)) //

//object
const obj = {
    firstname:"dhanush",
    lastname:"keloth",
    hobbies:["cricket","coding"],
    address:{
        city:"hyd",
        state:"telangana"
    }
}

console.log(obj)
console.log(obj["hobbies"])
console.log(obj.firstname) //dot notation
console.log(obj["address"]["city"]) //bracket notation
console.log(typeof(obj))
console.log(typeof(obj.address))

//set
const set = new Set([1,2,3,4,5,5])
set.add(6)
set.delete(5)
console.log(set)
set.forEach((value) => console.log(value))

//map
const map = new Map()
map.set("name","dhanush")
map.set("age",25)
console.log(map)
console.log(map.get("name"))
map.forEach((value,key)=>{
    console.log(value,key)
})

//instance of operator
const time = new Date()
console.log(time instanceof Date)

console.log([1,2,3].constructor) // returns the constructor of the array

//symbol
const person = { name: "Jack" };
const id = Symbol("id");
person[id] = 123;
const otherId = Symbol("id");
person[otherId] = 456;
console.log(person)

//dates
const date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.toLocaleString('default', { month: 'short' }))
console.log(date.getFullYear())

//tostring
console.log(date.toString())
console.log(date.toUTCString())
console.log(arr.toString())
let num = 10
console.log(typeof num.toString())

console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
