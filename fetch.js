// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((data) => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`)
//       .then((res2) => res2.json())
//       .then((data) => console.log(data));
//   });

// async function jsonMock() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//     let data = await response.json();
//     let res2 = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${data.id}`
//     );
//     let data2 = await res2.json();
//     return data2;
//   } catch (err) {
//     console.log("err", err);
//   }
// }

// getData().then((ganesh) => console.log(ganesh));

// getVal();
// async function getVal() {
//   let data = await jsonMock();
//   console.log("----------------------", data);
// }

// function customFetch(url) {
//   return (myPromise = new Promise((res, rej) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = function () {
//       if (xhr.status != 200) {
//         // analyze HTTP status of the response
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//         rej("error");
//       } else {
//         // show the result
//         // console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response
//         res(xhr.response);
//         // console.log(xhr.response); // response is the server response
//       }
//     };
//   }));
// }

// function customFetch(url, cbGetData) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.send();
//   xhr.onload = function () {
//     if (xhr.status != 200) {
//       cbGetData('error');
//     } else {
//       cbGetData(xhr.response);
//     }
//   };
// }

// customFetch("https://jsonplaceholder.typicode.com/posts/3")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/todos/3").then((response) =>
//   response.json()
// );

// customFetch(
//   "https://jsonplaceholder.typicode.com/posts/3",
//   renderPageAfterSuccAjaxCall
// );

// function renderPageAfterSuccAjaxCall(res) {
//   // Display all user info in browser
//   console.log("----", res);
// }

// console.log("ganesh");
document.getElementById("get-comments").addEventListener("click", getComments);
async function getComments() {
  console.log("iiii");
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let dataFromServer = await response.json();
  if (response.ok) {
    renderEmailToBrowser(dataFromServer);
  }
}

function renderEmailToBrowser(data) {
  let emailDiv = document.getElementById("email-container");
  data.map((itm) => {
    let emailPara = document.createElement("p");
    emailPara.setAttribute("class", "email-class");

    emailPara.style.color = "blue";

    emailPara.innerText = itm.email;
    emailDiv.appendChild(emailPara);
  });
}
