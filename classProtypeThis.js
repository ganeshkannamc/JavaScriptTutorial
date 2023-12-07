// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   printName() {
//     console.log(`Your name is ${this.name}, ${this.year}`);
//   }
// }
// let newObj = { name: { toTest: () => console.log("heelo") },age:21 };
// console.log(newObj.age.toString());
// console.log(newObj.name.toTest());
// console.log(newObj.age);

// let user = 'gaensh';
// console.log(user.charAt(3))
// console.log(String.prototype)

// let newCar = new Car("ganesh", 2019);
// console.log(newCar.printName());

// let user = new String('ganesh')

// console.log(user)

// let newObj = new Object()
// newObj.name = "gaensh";
// console.log(newObj)

// let userName = 'ganesh';
// userName = 21;

// let age = 21;

// let userInfo = {
//   firstName: "ganesh",
//   lastName: "Kanna",
//   fullName: function abc() {
//     let firstName = this.firstName;
//     return this.firstName + " " + this.lastName + firstName2;
//   },
// };

// console.log(userInfo.fullName());

// let userInfo1 = {
//   firstName: "ganesh",
//   lastName: "Kanna",
// };

// let userInfo2 = {
//   firstName: "ram",
//   lastName: "sam",
// };

// function fullName(content, val2) {
//   console.log(
//     content +
//       val2 +
//       " ***************** " +
//       this.firstName +
//       " - " +
//       this.lastName
//   );
// return "test" + " " + "test";
// }

// let test = fullName.bind(userInfo1)
// console.log(test())

// fullName.call(userInfo1, "sending the values", "sending the secount once");
// fullName.apply(userInfo1, ["sending the values", "sending the secount once"]);

// fullName.call(userInfo1, "sending the values", "sending the secount once");

// fullName.call(userInfo1, "sending the values", "sending the secount once");

// let getVal = fullName.bind(userInfo1);

// getVal('heyyyyyyyyyyyyyyyy','jasldvjlanbhonvola:rghiy')

// userInfo2.fullName = fullName()

// getVal('sdkavh;awsdkgvawsb',';asdhovasdv')

// class Student {
//   constructor(name, age, course, addres) {
//     this._name = name;
//     this._age = age;
//     this._course = course;
//     this._add = addres;
//   }

//   printName(val) {
//     console.log("print name " + val);
//   }

//   printStudentInfo() {
//     console.log("The student info is " + this._name + this._age + this._course);
//   }
// }

// let student1 = new Student("ganesh", 24, "cs");
// student1.name = 'kanna'
// let student2 = new Student();

// student1.printStudentInfo();
// student2.printName("hello");

// class Test{
// this.name = ''

// }

// Test.name = 'kanna'

// class Furniture {
//   static push = "Back push";
//   constructor(L, W, H) {
//     this.length = L;
//     this.width = W;
//     this.height = H;
//     console.log(Furniture.getPush());
//   }

//   static getPush() {
//     return "By default the push is - ", this.push;
//   }

//   square() {
//     if (this.length == this.width) {
//       return "This is a sqare table";
//     } else {
//       return "Not a square table";
//     }
//   }

//   rectangle() {
//     if (this.length !== this.width) {
//       return "This is a rectangle table";
//     } else {
//       return "Not a rectangle table";
//     }
//   }

//   orderConfimation() {
//     console.log(
//       `Thanks for placing you order - ${
//         this.push
//       } ${this.square()}, ${this.rectangle()}`
//     );
//   }
// }

// class ModernFurniture extends Furniture {
//   constructor(L, W, H, name) {
//     super(L, W, H);
//     this.furNaem = name;
//   }

//   printInfo() {
//     console.log('this is from child');
//   }
// }

// let shopA = new Furniture(2, 3, 4);
// let shopb = new Furniture(2, 2, 4);

// shopA.orderConfimation();
// shopb.orderConfimation();

// let newFur = new ModernFurniture(4, 5, 3, "getMe");

// console.log(newFur.square());
