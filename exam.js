

//  1.qn

// let arr=[3,4,5,6]
// let out = arr.map((val,i)=>{
    // return val+i
// })
// console.log(out)

// 2.qn


// for(var i = 0; i < 5; i++) {
//     setTimeout(() => {
//     console.log(i)
//     }, 1000);
//     }

//3qn

// function palindrome(n)
// 	 {
//         return new Promise((resolve,reject)=>{
// 		let n1=n;
// 		let rev=0;
// 		while (n>0)
// 		{
// 			let rem=n%10;
// 			n=(n-rem)/10;
// 			rev=(rev*10)+rem;
// 		}
		
//         if(rev==n1){
// 		resolve("Palindrome")
//        }
		
// 		else{
// 		reject("Not palindrome")

// 		}
//         })
//     }

// 	   palindrome(898).then(console.log)
//        .catch(console.log)

// 4 qn

// function tryMe(param1, param2) {
//     console.log(param1 + " and " + param2);
//     }
//     function callbackTester(callback, param1, param2) {
//     callback(param1, param2);
//     }
//     callbackTester(tryMe, "hello", "goodbye");

// 5 qn

// const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];
// console.log(website);

// 6 qn

// class Trainers {
//     constructor(name,age,position)
//     {
//        this.name = name
//        this.age=age
//        this.position=position
//     }
  
// }
// let trainee1 =new Trainers ("patta",23,"fresher")
// console.log(trainee1)

// 7 qn

// function palindrome(n)
// 	 {
        
// 		let n1=n;
// 		let rev=0;
// 		while (n>0)
// 		{
// 			let rem=n%10;
// 			n=(n-rem)/10;
// 			rev=(rev*10)+rem;
// 		}
//       return new Promise((r,s)=>{
//         r([n1,rev])
//       })
//     }
//     function check(n1,rev){
//         return new Promise((r,s)=>{
//         if(n1==rev){
//             r("Palindrome")

//         }
//         else{
//             s("not palindrome")
//         }
//     })
//     }
//    async function output(){
//     try{
//     let [a,b] =await palindrome(321)
//     console.log(a,b)
//     let c = await check(a,b)
//      console.log(c)
//    }
//    catch(error){
//     console.log(error)
//    }
// }
// output()

// 8 qn

//   function reverse(){
//    let num =123
//    let rev=0
//    while(num>0)
//    {
//     let rem=num%10
//     rev=(rev*10)+rem
//     num=(num-rem)/10
//     console.log(rev)

//    }
//     return rev
//   }reverse()

// 9 qn

// ES-6 Definition

// avaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.

// ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.

// This tutorial provides a brief summary of commonly used features of ES6 so that you can start quickly in ES6.
//  European Computer Manufacturers Association (ECMA)

// 10 qn

// Difference between map ,filter and foreach

// map() will return a new array as per the conditions applied.
//  forEach() will not return anything. forEach() returns undefined. 
//  filter() method will return an array of matching elements else will return an empty array if no matching happens

// 11 qn

// What are the new features introduced in ES6

// >arrow function
// >template literals
// >Promise
// >class
// >promise chaining
// >