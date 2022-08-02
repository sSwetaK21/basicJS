// Array Constructor

// let arr = new Array(3) // 3empty items
// let arr = new Array(1,2,3) // [1,2,3]
// let arr = new Array('red') //['red']
// console.log(arr)

// let arr = [1,2,3,4,5]
// console.log(Array.isArray(arr))  //true

// let arr1 = [1,2,3]
// let arr2 =[4,5,6]
// console.log(arr1.concat(arr2))  //[1,2,3,4,5,6]

// let arr = [1,2,3,4]
// console.log(arr.join()) //1,2,3,4
// console.log(arr.join(''))  //1234
// console.log(arr.join('-')) //1-2-3-4

// console.log(arr.includes(1)) //true

// console.log(arr.indexOf(2)) //1


// let arr =[1,2,3,4,2,3,1,2]
// console.log(arr.lastIndexOf(2))   //7

// let arr =[3,4,5]
// arr.unshift(1,2)
// console.log(arr) //[1,2,3,4,5]

// let arr =[1,2,3]
// arr.shift()
// console.log(arr)  //[2,3]

// let arr =[1,2]
// arr.push(3)
// console.log(arr)    //[1,2,3]

// let arr =[1,2,3]
// arr.pop()
// console.log(arr)   //[1,2]



// let arr =[1,2,3,4,5]
// console.log(arr.slice(1,-2))  //[ 2, 3 ]

// console.log(arr.slice(1,arr.length -1)) // [ 2, 3,4 ]

// console.log(arr.slice(1,3)) //[2,3]

// console.log(arr.slice(-2))   //[4,5]

// console.log(arr.slice(1))    // [2,3,4,5]

//======================Splice============================

// let arr =[0,1,2,3,4,5,6]
// arr.splice(1,0,2)
// console.log(arr)   //[ 0,2,1,2,3,4,5,6]




// arr.splice(3,2,8,9)   //[0,1,2,8,9,5,6]
// console.log(arr) 


// arr.splice(2)       //[0,1]

// arr.splice(1,0,4)    //[0,4,1,2,3,4,5,6]
// console.log(arr)

// let arr = [1,2,3,'a']
// console.log(arr.toString())   //1,2,3,a

// let n = 33
// console.log(n.toString())

// let arr =[3,4,2,24,1,10]
// arr.sort()  // [1,10,2,24,3,4]

// // arr.sort(function(a,b){
// //     return a - b        //Ascending [1,2,3,4,10,24]
// // })

// // arr.sort((a,b)=> b -a)  //descending [24,10,4,3,2,1]

// console.log(arr)



// let arr = [1,2,3,4,5]
// let res = arr.filter((value)=> value >4)  //5
// console.log(res)

// let arr =[1,2,3,4]
// let res = arr.every((a)=> a>1)  //false
// console.log(res)

// let arr =[1,2,3,4]
// // let res = arr.fill(3)         //[3,3,3,3]

// // let res = arr.fill(3,1,3) //[1,3,3,4]

// // let res = arr.fill(0, 1)  //[1,0,0,0]
// console.log(res)

// let arr = [2,3,4,5,6]
// // let res = arr.find((a)=> a<5)  //2
// console.log(res)

// let arr =[1,2,3,4]
// // let res = arr.map((a,b)=> a+b) // [1,3,5,7]

// // let res = arr.map((a)=> a+1)      //[2,3,4,5]
// console.log(res)

// let numbers = [1, 2, 3];
// let sum = numbers.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
// });
// console.log(sum);

// let numbers = [1, 2, [3, 4, 5]];
// let nums = numbers.flat();
// console.log(nums);

// const numbers = [1, 2, , 4, , 5];
// const sequence = numbers.flat();
// console.log(sequence);

// const numbers = [1, 2, [3, 4, 5, [6, 7]]];
// const flatNumbers = numbers.flat(2);
// console.log(flatNumbers);


// const numbers = [1, 2, [3,[ 4, 5, [6, 7, [8, 9]]]]];
// const flatNumbers = numbers.flat(Infinity);
// console.log(flatNumbers);

// let arr =[1,2,3]
// let {a,b, ...rest} = arr
// console.log(a,b,rest)

// let arr1 = [1,2]
// let arr2= [3,4]
// let res = [...arr1, ...arr2]
// console.log(res)


// let nestedNumbers = [[1], [2]];
// let numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));
// console.log(numbersCopy)

// var y=1;
// if(function f() {}){
//     y += typeof f
// }
// console.log(y)      //1undefined