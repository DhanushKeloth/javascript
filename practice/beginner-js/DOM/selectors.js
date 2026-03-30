const desc = document.getElementById("desc");
console.log(desc.innerHTML);
// const subheader = document.querySelector("h2.desc");
const subheader = document.querySelector(".desc");

console.log(subheader.innerHTML);

const navlinks = document.querySelectorAll(".nav-links li");

navlinks.forEach((link)=>{
    console.log(link.innerHTML)
})

const contactitem = document.querySelectorAll("li")[2];
console.log(contactitem.textContent)
console.log(contactitem.parentElement.tagName);

console.log(subheader.nextElementSibling.tagName);

//modify the content
const greeting = document.getElementById("greeting")
greeting.textContent="welcome to my website" //modify the existing content
greeting.innerHTML="welcome to my website <strong>dhanush</strong>"

const user = document.getElementById("user-name")
console.log(user.value)

//attributes
const profileImage = document.getElementById("profile")
console.log(profileImage.getAttribute("src"))
profileImage.setAttribute("src","./simba.jpg")
profileImage.setAttribute("height","200")

//style 
const submit = document.getElementById("submit")
submit.style.padding="10px 50px"
submit.style.backgroundColor="green"
submit.style.color="white"
submit.style.borderRadius="10px";
submit.style.fontSize="15px"

submit.classList.add("btn")

submit.classList.remove("btn")
const body = document.body
submit.addEventListener("click",()=>{
    console.log("clicked")
    body.classList.toggle("dark-mode")
})
