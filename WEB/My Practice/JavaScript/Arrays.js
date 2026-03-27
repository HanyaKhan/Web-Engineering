//ARRAYS
var arr=[10,20,30,40]
console.log("Sample array:",arr);
arr.push(99)
console.log("after pushing 99:",arr);
arr.pop(arr[1])
console.log("after popping 99:",arr);

console.log("length of arr:",arr.length);

var arr2=[10,'hanya khan.',40.19,-20.4,'@']
console.log("element of array at position -1 :",arr2[-1]);

//Higher order functions
var arr3=[10,20,30,50,60]

arr3.forEach(function(a){
    console.log('hello',a);
})
