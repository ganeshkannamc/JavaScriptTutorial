// TDZ - Temporal Death Zone
// Closure
// Copy by value, copy by reference
// Lexical Scoping
// Rest and Spread operator

// TDZ
{
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  //   console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}

// let userName = "ganesh";
// Lexical Scoping
// function getName() {
//   console.log(userName);
//   let age = 24;
//   function test2() {
//     console.log(age);
//   }
//   test2();
// }

// getName();
// console.log(userName);
// console.log(age)

// function parent(val){
//     let number = 1;
//     return number + val
// }

// Closure
function parent(val) {
  let number = val;
  let preVal;
  let preOut;
  return function child(val) {
    if (preVal == val) {
      console.log("Printing previous val, since no change - ", number + val);
    } else {
      // Image some big logical operation goes here
      console.log("Will take 5 min to run - ", number + val);
      preOut = number + val;
    }
    preVal = val;
  };
}

// let out = parent(2);
// console.log(out);
// out(2);
// out(2);
// out(3);
// out(4);
// out(5);
// out(5);
// out(8);

// Copy by value, copy by reference

// let colorArr = ['red','blue','black'];
// let copyOfColorArr = colorArr

// // Removes the last element
// copyOfColorArr.pop()

// // console.log(colorArr)
// // console.log(copyOfColorArr)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newFruits = fruits.slice(1);

// console.log(fruits)
// console.log(newFruits)

// let colorArr = ['red','blue','black'];
// let copyOfColorArr = [...colorArr]

// console.log([...colorArr])

// // Removes the last element
// copyOfColorArr.pop()

// console.log(colorArr)
// console.log(copyOfColorArr)
// console.log(colorArr)
// console.log(copyOfColorArr)

// let username = 'ganesh'
// console.log([...username])

// function add(...getVal) {
  //   let [a, b, c, d, e] = getVal;
  // console.log(...getVal)
  //   console.log(a + b + c + d + e);
// }

// add(1, 2, 3, 4, 5);
