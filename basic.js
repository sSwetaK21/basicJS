// // Arrow function

// function add(a, b){
//     return a+b
// }
// let sum =add

// function average(a,b,fn){
//     return fn(a,b) / 2
// }

// console.log(average(2,3,sum))


// function task() {
//     console.log('setTimeout Demo!')
// }

// setTimeout(task, 3000);


// clearTimeout(timeOut)


// function sub(x , y){
//     return x -y
// }
// console.log(sub(4,2))



// Annonymous

// (function (){
//     console.log('Anonymous')
// })

// let show = function (){
//     console.log('Anonymous')
// }
// show()

// //iife

// (function (){
//     console.log('Immediately Invoked Function Execution')
// }) ();


// let person = {
//     firstName: 'Shweta',
//     lastName: 'Kodam'
// };

// ( function (){
//     console.log(person.firstName + ' ' + person.lastName);
// }) ()


// recursion

// function recursion(num){
//     if(num > 0){
//         console.log(num)
//     }
//     return recursion(num-1)
// }
// console.log(recursion(4))

// function sum(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return n + sum(n - 1);
//   }
//   console.log(sum(4))

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.greet = function (){
//         return this.firstName + ' ' + this.lastName
//     };

// }

// let person  = new Person('joe', 'chily')
// console.log(person.greet())

// let person ={
//     firstName : 'Shwey',
//     lastName : 'Kodam'
// }

// for(let i in person){
//     console.log(i + ':'+ person[i])
// }

// console.log(Object.values(person))
// console.log(Object.keys(person))
// console.log(Object.entries(person))

// function createPerson(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName : lastName,
//         greet: function(){
//             return firstName + lastName
//         }
//     }
// }

// let p1 = createPerson('shwey', 'kodam')
// console.log(p1)