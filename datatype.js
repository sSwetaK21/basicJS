// let message = 'I\'m also a valid string'; // use \ to escape the single quote 
// console.log(message)

// console.log(null == undefined)  //true
// console.log(null === undefined)  //false

// console.log(3 == '3')  // true
// console.log(3 == -3)   //false

//type coercion

// console.log('a' - 1)  //NaN
// console.log('a' + 1)  //a1

// console.log('2' - 1)  //1

// let a ='19' - '13' + 17  //23

//falsy values

// console.log(Boolean(0))  //false
// console.log(Boolean(null))  //false


// console.log(Boolean(!0))  //true

// console.log(0 ||	null)  //null
// console.log(true ||	false)  //true

// console.log(true && false)   //false
// console.log(0 && null)    //0
// console.log(0 && 'shwe')  //0

// console.log('app' > 'ban')  //false

// console.log('app' < 'APP')   //false
// console.log('app' > 'APP')   /true

// let a =1;
// ++a 

// a++
// console.log(a++)  //1
// console.log(a)   //2
// console.log(++a) //2

// console.log((10).toString(2))  //1010

// console.log(NaN/2); // NaN
// console.log(NaN === NaN); // false

// console.log(Symbol() == Symbol()); // false

// let str = ' hi, I\'m shweta!'
// console.log(str)

// let str = `"I'm shweta!"`
// console.log(str)

// let names = 'Joe'
// let str = `he is ${names}`
// console.log(str)

// let person ={
//     name :'shwe',
//     lname : 'dao',
//     greet: {
//         x : 1,
//         y:2
//     }
 // }

// let flatten = (obj) => Object.values(obj).flat();
// console.log(flatten(person))
// console.log(Object.values(person).flat())

// const flatten=(obj) => Object.values(obj).flat();
// const object = { x:[1,2,3],
//                 y:[4,5,6,7],
//                 z:{
//                     xx: 8,
//                     yy: 9
//                 }
//                 };
// console.log(flatten(take_me));

// result = Object.keys(object).reduce(function (value, key) {
//     return value.concat(key, object[key]);
// }, []);
// console.log(result);