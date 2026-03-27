//objects

        // ()functions
        // {}objects
        // []array
var obj1={
    user:'ali',
    age: 20
}
console.log("name:",obj1.user);
console.log("age:",obj1.age);
console.log("both together:",obj1);

var obj2={
    model:"iphone",
    price:70000,
    color:'white'
}
var obj3={
    model:'samsung',
    price:50000,
    color:'black'
}
console.log(obj2,obj3);


//functions and objects
var user={
    userName:'ali',
    age:69,
    greet:function(){
        return 'hello'
        // return 10
    }
}
console.log(user.userName,
            user.age,
            user.greet());

//array of objects
 var arr100=[
    {user:'ali',age:22,couse:'C#'},
    {user:'SARIM',age:92,couse:'JAVA'},
    {user:'EHSAN',age:52,couse:'C++'}
 ]

 console.log('all:',arr100);
 console.log('pehli line (0th position):',arr100[0]);
 console.log('dusri line (1th position):',arr100[1]);
 console.log('teesri line (2nd position):',arr100[2]);
 console.log('Name:',arr100[0].user);
 console.log('age:',arr100[2].age);