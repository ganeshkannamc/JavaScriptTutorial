// local storage, session
// let loginInfo = JSON.stringify({ name: "Smith", isLogin: "true" });
// localStorage.setItem("loginInfo", loginInfo);
// localStorage.setItem("loginInfo2", loginInfo);
// localStorage.setItem("loginInfo4", loginInfo);
// localStorage.setItem("loginInfo5", loginInfo);
// localStorage.setItem("loginInfo6", loginInfo);
// localStorage.setItem("loginInfo7", loginInfo);
// sessionStorage.setItem("loginInfo-sessionStorage", loginInfo);
// localStorage.getItem("lastname");

// let getItm = localStorage.getItem("loginInfo", loginInfo);
// localStorage.removeItem("loginInfo", loginInfo);
// localStorage.clear()
// console.log(getItm);

const request = indexedDB.open("user", 1);

request.onerror = (event) => {
  console.error(`Database error: ${event.target.errorCode}`);
};

request.onsuccess = (event) => {
  console.log(`IndexedDB created succesfully!`);
  let db = event.target.result;
  let store = db.createObjectStore("Contacts", {
    autoIncrement: true,
  });

  // create an index on the email property
  let index = store.createIndex("email", "email", { unique: true });

  insertContact(db, {
    email: "john.doe@outlook.com",
    firstName: "John",
    lastName: "Doe",
  });

  insertContact(db, {
    email: "jane.doe@gmail.com",
    firstName: "Jane",
    lastName: "Doe",
  });
};

function insertContact(db, contact) {
  // create a new transaction
  const txn = db.transaction("Contacts", "readwrite");

  // get the Contacts object store
  const store = txn.objectStore("Contacts");
  //
  let query = store.put(contact);

  // handle success case
  query.onsuccess = function (event) {
    console.log(event);
  };

  // handle the error case
  query.onerror = function (event) {
    console.log(event.target.errorCode);
  };

  // close the database once the
  // transaction completes
  txn.oncomplete = function () {
    db.close();
  };
}
