// 4 pillars of dom
//1. Selection of an element
var a= document.querySelector("h1")
console.log(a)

//2. Changing the HTML
a.innerHTML="changed html"          //HTML change krne k liye thorugh js

//3. Changing CSS
var b= document.querySelector("h1")
a.style.color="yellow"               //css ko change krne k liye
a.style.border= "15px dashed yellow"
a.style.fontSize="80px"
a.style.width="500px"
a.style.height="200px"
a.style.textAlign="centre"
a.style.padding="90px 80px"
a.style.backgroundColor="black"     //camel casefollow hoga js mai. not the dash : "-"

//4.Event Listener


a.addEventListener("click",function(){
    console.log("its the event listener function")
    a.innerHTML="i am event listener now"
    a.style.color="red"
    a.style.border="none"
   
})

var x = document.querySelector("button")
x.addEventListener("click",function(){
    x.innerHTML="submitted"
    x.style.backgroundColor="pink"
})

var bulb=document.querySelector("#bulb")
var btn=document.querySelector("button2")
var flag=0
btn.addEventListener("click",function(){
   
    if(flag==0){
    bulb.style.backgroundColor="yellow"
    console.log("Clicked");
    btn.innerHTML="OFF"
    flag=1

    }
    else{
        bulb.style.backgroundColor="crimson"
        console.log("again");
        btn.innerHTML="ON"
        flag=0
    }
})

//multiple elements selecting at once       //Selecting all h2's at once
var h=document.querySelectorAll(".h")
h.forEach(function(e1){
    e1.addEventListener("click",function(){
        e1.style.color="purple"
        console.log(e1)
    })
})



