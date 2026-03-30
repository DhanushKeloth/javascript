const inputField = document.getElementById("input-field");
const resultField = document.getElementById("result-field");

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
buttons.forEach(btn=>{

    btn.addEventListener("click",(e)=>{
        console.log(btn.innerText)
        if(btn.textContent <= "9" && btn.textContent >= "0"){
            inputField.value += btn.textContent;
        }
        else if(btn.textContent=="+"||btn.textContent=="-"||btn.textContent=="*"||btn.textContent=="/")
        {
            inputField.value += btn.textContent;
        }
        else if(btn.textContent=="."){
            inputField.value += btn.textContent;
        }
        else if(btn.textContent=="="){
            try{
                resultField.value = eval(inputField.value);
            }            catch(err){
                resultField.value = "Error";
            }           
        }
    })
})
