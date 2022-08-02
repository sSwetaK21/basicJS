//============palindrome=============

// let num =232;
// let rev = 0;
// let temp =num;
// while(num>0){
//     let last = Math.floor(num % 10);
//     rev = rev*10 + last;
//     num = Math.floor(num /10)
// }
// if(temp == rev){
//     console.log('palindrome')
// } else{
//     console.log('NOt')
// }


//===========patterns=========

// let row= 4;
// let col =5
// for(let i=0; i<row;i++){
//     let star = ''
//     for(let j=0; j<col;j++){
//         star += "*"
//     }
//     console.log(star)
// }

// *****
// *****
// *****
// *****

// let row=4;
// let col=4;
// for(let i=0; i<=row; i++){
//     let star =''
//     for(let j=0; j<=i; j++){
//         star +="*"
//     }
//     console.log(star)
// }

// *
// **
// ***
// ****
// *****

// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = n; j > i; j--) {
//       string += " ";
//     }
//     // printing star
//     for (let k = 0; k < i * 2 - 1; k++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);



// o/p:
//                 *    
//                ***   
//               *****  
//              ******* 
//             *********