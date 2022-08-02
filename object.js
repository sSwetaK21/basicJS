// let person ={}  //empty object

// let person = {
//     fname : 'shwey',
//     lastname: 'kodam',
//     // greet : function(){
//     //      return this.fname +" "+ this.lastname

//     // },
//     // 'buiding no': 231
// }

// let {fname, ...rest} = person
// console.log(fname, rest)



// console.log(person.greet())   //shwey kodam

// console.log(person['buiding no'])  //231

// person.age = 22
// console.log(person)       //added age

// delete person.age
// console.log(person)          //deleted age

// console.log('age' in person)   //false

// let {fname, lastname}= person
// console.log(fname, lastname)


//==========GETTERS AND SETTERS=================

// let person={
//     fname: 'Shweta',
//     lname: 'Kodam',
//     get fullName(){
//         return `${this.fname} ${this.lname}`
//     },
//     set fullName(newName){
//         let parts = newName.split(' ')
//         this.fname = parts[0]
//         this.lname = parts[1]
//     }
// }

// person.fullName= 'Sachin Tendulkar'
// console.log(person.fullName)


// let person = {
//     fname: 'shwy',
//     lname:'kodam',
//     age: 22
// }

// let{fname, ...rest} = person
// console.log(fname,rest)

// let {fname, lname, age} = person
// console.log(fname,lname,age)            //shwy kodam 22

// let prof = Object.values(person)
// console.log(Object.values(person))   //[ 'shwy', 'kodam', 22 ]

// console.log(Object.entries(person))  
//[ [ 'fname', 'shwy' ], [ 'lname', 'kodam' ], [ 'age', 22 ] ]

// console.log(Object.keys(person))          //[ 'fname', 'lname', 'age' ]

//=========for in loop===================

// for(let i in person){
//     console.log(person[i])
// }


//============FACTORY FUNCTION==================

// function createPerson(fname, lname){
//     return {
//         fname: fname,
//         lname:lname,
//         greet: function(){
//             return fname + ' ' +lname
//         }
//     }
// }

// let person1 = new createPerson('shwey', 'ko')
// console.log(person1.greet())

//===========CONSTRUCTOR===============

// function Person(fname,lname){
//     this.fname =  fname,
//     this.lname = lname

// }
// let person1 = new Person('shwey', 'joe')
// console.log(person1)


// function createPerson(fname, lname){
//     return {
//         fname: fname,
//         lname:lname,
//         greet:function(){
//             return fname + " "+ lname
//         }
//     }
// }

// let person1 = createPerson('sweety', 'nadigatla')
// console.log(person1.greet())


// let person ={
//     fname: 'Shwey',
//     lname: 'Kodam',
//     get fullName(){
//         return `${this.fname} ${this.lname}`
//     },
//     set fullName(newName){
//         let parts = newName.split(' ')
//         this.fname = parts[0]
//         this.lname = parts[1]
//     }
// }

// person.fullName = 'Shweta Kodam'
// console.log(person.fullName)