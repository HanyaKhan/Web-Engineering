// FUNCTIONS

function hey(){
    console.log("yeh 'hey' naam ka functions hai")
}

hey()

function walk(){
    console.log("I am walking.")
}

function sing(){
    console.log("I am a singing.")
}

function talk(){
    console.log("i am taking. Can't you hear?")
}

walk(), sing() , talk()

//we can pass something in a function
function greet(a){
    console.log("good morning",a)
}
greet(10)
greet("hk.")

//function can return us something
function abc(){
    console.log("hello")
    return 20;
}
var a=abc()
console.log(a)

//another way to write a same function
var xyz=function(){
    console.log("hello2")
    return 100
}
xyz()
console.log(xyz)

//another way

var lmn =()=>{
    console.log("hello3")
}
lmn()


//-----------------------------------------------------
//use of var,let and const
//var is father of let
var PI=3.14
console.log("PI(with const):",PI)
PI=3.99
console.log("PI(with var again):",PI)       //it changes everytime. but with const it wont change

const  PI2=3.14
console.log("PI (with const):",PI2)
PI2=400;                                 //no reinitialize with const
    
