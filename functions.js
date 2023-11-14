// Function - Repeated logical functionality can be implemented inside functions. Reusablity.
// DRY - Do not Repeat Yourself
// Function - Regular function, parametrized function, return function
// rugular, arrow function, IIFE (Immediately Invoked Function Expression), anonomus function
// Var, regular functions will get hoisted
// Callback

// function nonParameterizedFunction() {
//   console.log("Print name");
// }

// function parameterizedFunction(userName) {
//   console.log(`Printing the fname from function - ${userName}`);
// }
// function returnFunction(userName) {
//   return `The employee name is - ${userName} and the ID is - `;
// }

// nonParameterizedFunction();
// parameterizedFunction("Kanna");
// let output = returnFunction("Ganesh");

// console.log(output2);
// generateEmpId(output);

// nonParameterizedFunctionArr();
// parameterizedFunctionArr("Arrow Ganesh");
// let outputArr = "Arrow Ganesh";
// generateEmpId(outputArr);

// function generateEmpId(userName) {
//   let empId = Math.floor(Math.random() * 10);
//   console.log(userName, empId);
// }

// const nonParameterizedFunctionArr = () => {
//   console.log("Print name arrow");
// };

// const parameterizedFunctionArr = (userName) => {
//   console.log(`Printing the fname from arrow function - ${userName}`);
// };

// const returnFunctionArr = (userName) => {
//   return `Arrow - The employee name is - ${userName} and the ID is - `;
// };

// Add two number, and with the output i should do any logical operations.
// function addItem(val1, val2,userDefinedVal, customFunction) {
//   let added = val1 + val2;
//   customFunction(Number(added),userDefinedVal);
// }

// // function addItem(val1, val2) {
// //   return val1 + val2;
// // }

// function finalResultWithMultipy(addedVal, userDefinedVal) {
//   console.log(addedVal * userDefinedVal);
// }

// function finalResultWithSub(addedVal, userDefinedVal) {
//   console.log(addedVal - userDefinedVal);
// }

// function finalResultWithAdd(addedVal, userDefinedVal) {
//   console.log(addedVal + userDefinedVal);
// }

// addItem(2, 2,2,finalResultWithMultipy);

// let output = addItem(2, 2);
// finalResultWithMultipy(output, 2);

let arr1 = ["red", "black", "blue"];
let arr2 = ["ganesh", "kanna", "ram"];
function customMap(listOfItems, customFunc) {
  for (let i = 0; i < listOfItems.length; i++) {
    // console.log(`The values are - ${listOfItems[i]}`);
    // console.log(`${2} ${listOfItems[i]}`);
    customFunc(listOfItems[i], i, listOfItems);
  }
}

function getItm(itm) {
  console.log(`The value are ${itm}`);
  //   console.log(`The value are ${indexCount}`);
  //   console.log(`The value are ${arrItm}`);
}

customMap(arr1, (itm,ind,arrit) => console.log(itm,ind,arrit));
// customMap(arr2, getItm);

// arr1.map(getItm);
