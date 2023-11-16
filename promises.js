// const myPromise = new Promise(() => {});

let arr = ["red", "blue", "green"];

const myPromise = new Promise(getPromiseResult);

// function getPromiseResult(resole, reject) {
//   let ifExist = arr.includes("red");
//   if (ifExist) {
//     resole({ name: "ganesh", age: 24 });
//   } else {
//     reject("falied");
//   }
// }

function getPromiseResult(resole, reject) {
  setTimeout(() => {
    if (true) {
      resole("success");
    } else {
      reject("failes");
    }
  }, 5000);
}

// Promise has 3 states
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// console.log(myPromise)
// console.log(fetch(''))

// myPromise
//   .then((data) => (document.getElementById("three").innerText = data))
//   .catch((data) => console.log("catch", data));
// myPromise.then(render).catch((data) => console.log("catch", data));

// console.log("Hey am next line");
// console.log("Hey am next line");
// console.log("Hey am next line");
// run for 5 min
// console.log("Hey am next line");

function render(data) {
  document.getElementById("three").innerText = data;
}

document.getElementById("one").innerText = "Hello";
document.getElementById("two").innerText = "Hello";

document.getElementById("four").innerText = "Hello";
document.getElementById("five").innerText = "Hello";


setTimeout(()=>console.log('settimeout'),5000)

// i have other logic which will run for 7 min
