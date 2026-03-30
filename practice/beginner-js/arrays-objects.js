const arr = [1,2,3,4,5]
const b = new Array(1,2,3,4,5)
console.log(b)
console.log(arr)
arr.push(6)
console.log(arr) // adds to the end of the array
arr.pop() //removes last element
console.log(arr) 
arr.shift() //removes first element
console.log(arr)
arr.unshift(1000) //adds first element
console.log(arr)
console.log(arr.length) 


const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = arr1.concat(arr2)
console.log(arr3)
const newarr = arr.slice(1,3)// returns a new array
console.log(newarr)

const arr4 = [1,2,3,4,5]
arr4.splice(1,2) //removes 2 elements starting from index 1
console.log(arr4)

const arr5 = [1,2,3,4,5]
arr5.splice(1,0,1000) //inserts 1000 at index 1
console.log(arr5)

//map
arr5.map((num,index)=>{
    console.log(num,index)
})

//filter
const ages = [10,15,28,18,20,25]
const res=ages.filter((age)=>age>=18)

console.log(res)

//reduce
const items=[10,20,30]
const total=items.reduce((acc,current)=>{
    console.log(acc,current)
    return acc+current
},0) //0 is the initial value
console.log(total)

//example
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true }
];

// const result = products.filter((product)=>product.inStock)
// const instockitems=result.map((product)=>{
//     return product.name
// })
const instockitems = products.filter((product)=>product.inStock).map(product=>product.name)
console.log(instockitems)

//objects
const person={
    name:"dhanush",
    age:20,
    address:{
        city:"hyderabad",
        state:"telengana"
    }
}
console.log(person)
console.log(person.address.city)
console.log(Object.entries(person))
for(let key of Object.keys(person)){
    console.log(key,person[key])
}

for(let [key,value] of Object.entries(person)){
    console.log(key,value)
}

//destructuring
const podium = ["first","second","third"]
const [winner, runner, third]= podium
console.log(winner)

const {name,age}= person
console.log(name,age)