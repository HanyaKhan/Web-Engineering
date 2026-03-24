var button= document.querySelector("button")
var button2= document.querySelector("button2")
var istatus=document.querySelector("h2")
var box=document.querySelector("#box")
button.addEventListener("click",function(){
    box.style.borderColor = "green"
    box.style.borderStyle="solid"
    istatus.innerHTML="FRIENDS!"
    istatus.style.fontFamily="arial"
    istatus.style.textDecoration="underline"
    istatus.style.color="GREEN"
})

button2.addEventListener("click",function(){
    istatus.innerHTML="STRANGER!"
    box.style.borderColor = "Red"
    box.style.borderStyle="solid"
    istatus.style.fontFamily="arial"
    istatus.style.textDecoration="underline"
    istatus.style.color="red"

})
