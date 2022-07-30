// Arrow function

function add(a, b){
    return a+b
}
let sum =add

function average(a,b,fn){
    return fn(a,b) / 2
}

console.log(average(2,3,sum))