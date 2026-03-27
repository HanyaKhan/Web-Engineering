
// //ERRORS + WARNINGS
// console.log("this is the text")
// console.warn("this is warning")
// console.error("this is error")
// console.info("this is simple info")
// alert("this is alert")
// var ans2=confirm("Acha waqie??")
// console.log(ans2)
// var naam=prompt("Enter your name")
// console.log("Name:",naam)

// //VARIABLES INFORMATION & PRACTICE
// var a                   //variable declration
// a=true                  //variable initialization
// // console.log(hello)   //hello is not defined in memory(so error)
// console.log(a)          //a ki value a jayegi
// a=20
// b=5
// console.log(a)           //reinitialize now a=20
// //---------------------------------------------------------------
// //airthmetic operations
// console.log(a/b)
// console.log(a*b)
// console.log(a+b)
// console.log(a-b)
// console.log(a%b)

// //-------------------------------------------------------------------

// // JS DATATYPES

// //   -Premetive
// //         - Number (1,2,3,20.5,-15,6.68203)
// //         - String ('a','hello')
// //         - Boolean (true,false)
// //         - undefined
// //         -null
// //         - Symbol
// //         - NaN
// //    - Reference
// //         - Array
// //         - Object
// //         - Function

// var a=10
// var b='hk'
// var bool=true
// var notdefined
// var zero=null
// console.log("a:",a)
// console.log("b:",b)
// console.log("bool:",bool)
// console.log("notdefined:",notdefined)
// console.log("zero/empty:",zero)
// console.log("additiom:",a+b)     //'+' : addition +concatination
// console.log("division:",a/b)     //'/' : shows NaN bcz one is string and one is number
// console.log("subtraction:",a-b)     // '-' : Nan
// console.log("remainder:",a%b)     //'%': NaN
// console.log("multiplication:",a*b)     //'*': NaN

// //---------------------------------------------------------------------------------------

// //CONDITIONALS
// if(10>20){
//     console.log("TRUE: correct")
// }
// else{
//     console.log("FALSE: incorrect")
// }

// var age=prompt("Enter your age")
// if(age>=18){
//     console.log("TRUE: You can vote.")
// }
// else{
//     console.log("FALSE: you can't vote.")
// }
// //---------------------------------------------------------------------------------------
// //Loops
// var a=1
// while(a<5){
//     console.log("hello")
//     a++
// }

// for(var i=0;i<5;i++){
//     console.log("hello2")

// }
// //comparison operator

// var x=10;
// var y='10';
// // if(x==y)         //compare only values 10
// if(x===y){          //compare both values and its datatypes too.            
//     console.log("correct")
// }
// else{
//     console.log("incorrect")
// }

// // FUNCTIONS

// function hey(){
//     console.log("yeh 'hey' naam ka functions hai")
// }

// hey()

// function walk(){
//     console.log("I am walking.")
// }

// function sing(){
//     console.log("I am a singing.")
// }

// function talk(){
//     console.log("i am taking. Can't you hear?")
// }

// walk(), sing() , talk()

// //we can pass something in a function
// function greet(a){
//     console.log("good morning",a)
// }
// greet(10)
// greet("hk.")

// //function can return us something
// function abc(){
//     console.log("hello")
//     return 20;
// }
// var a=abc()
// console.log(a)

// //another way to write a same function
// var xyz=function(){
//     console.log("hello2")
//     return 100
// }
// xyz()
// console.log(xyz)

// //another way

// var lmn =()=>{
//     console.log("hello3")
// }
// lmn()


// //-----------------------------------------------------
// //use of var,let and const
// //var is father of let
// var PI=3.14
// console.log("PI(with const):",PI)
// PI=3.99
// console.log("PI(with var again):",PI)       //it changes everytime. but with const it wont change

// const  PI2=3.14
// // console.log("PI (with const):",PI2)
// // PI2=400;                                 //no reinitialize with const
    


// //----------------------------------------------------------------------------
// //ARRAYS
// var arr=[10,20,30,40]
// console.log("Sample array:",arr);
// arr.push(99)
// console.log("after pushing 99:",arr);
// arr.pop(arr[1])
// console.log("after popping 99:",arr);

// console.log("length of arr:",arr.length);

// var arr2=[10,'hanya khan.',40.19,-20.4,'@']
// console.log("element of array at position -1 :",arr2[-1]);

// //Higher order functions
// var arr3=[10,20,30,50,60]

// arr3.forEach(function(a){
//     console.log('hello',a);
// })


// //----------------------------------------------------------------------------
// //objects

//         // ()functions
//         // {}objects
//         // []array
// var obj1={
//     user:'ali',
//     age: 20
// }
// console.log("name:",obj1.user);
// console.log("age:",obj1.age);
// console.log("both together:",obj1);

// var obj2={
//     model:"iphone",
//     price:70000,
//     color:'white'
// }
// var obj3={
//     model:'samsung',
//     price:50000,
//     color:'black'
// }
// console.log(obj2,obj3);


// //functions and objects
// var user={
//     userName:'ali',
//     age:69,
//     greet:function(){
//         return 'hello'
//         // return 10
//     }
// }
// console.log(user.userName,
//             user.age,
//             user.greet());

// //array of objects
//  var arr100=[
//     {user:'ali',age:22,couse:'C#'},
//     {user:'SARIM',age:92,couse:'JAVA'},
//     {user:'EHSAN',age:52,couse:'C++'}
//  ]

//  console.log('all:',arr100);
//  console.log('pehli line (0th position):',arr100[0]);
//  console.log('dusri line (1th position):',arr100[1]);
//  console.log('teesri line (2nd position):',arr100[2]);
//  console.log('Name:',arr100[0].user);
//  console.log('age:',arr100[2].age);