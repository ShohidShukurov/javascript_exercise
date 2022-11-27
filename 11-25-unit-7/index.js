// let arr = [
//   { id: 1, name: "Usmon", job: "developer" },
//   { id: 2, name: "Usmon", job: "developer" },
//   { id: 3, name: "Usmon" },
//   { id: 4, name: "Usmon", job: "developer" },
//   { id: 5, name: "Usmon" },
// ];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].job) console.log(arr[i].job);
// }
// let obj2 = {};
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };

// let { id, name, job } = obj;
// obj2.id = id;
// obj2.name = name;
// obj2.job = job;

// obj2.name = "new name";
// console.log(obj);
// console.log(obj2);

// const add = (obj, key, value) => {
//   obj[key] = value;
//   console.log(obj);
// };
// const myObj = { id: 1 };
// add(myObj, "address", "toshkent");
// add(myObj, "age", 10);

// // {
//     name: "some",
//     id: 1,
//     key: "toshkent"
// }

// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 5,
// };

// if (obj.practice > 1) {
//   console.log("qabul qilindi");
// } else {
//   console.log("ming bor uzur");
// }

// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
//   talaba: true,
// };

// if (obj.talaba) {
//   obj.kredit = true;
// } else {
//   obj.kredit = "olinmadi";
// }
// console.log(obj);

// let obj = {
//   id: 1,
//   name: "Usmon",
//   age: 32,
//   year: 1990,
// };

// if (2022 - obj.year === obj.age) {
//   console.log("true data");
// } else {
//   console.log("xato ma`lumot kiridingiz");
// }

// const data = {
//   age: 20,
//   id: 3,
//   name: "ali",
//   viloyat: "Andijon",
// };
// const arr = ["Andijon", "Namangan", "Qarshi", "toshkent"];
// for (let i = 0; i < arr.length; i++) {
//   if (data.viloyat === arr[i]) {
//     console.log("yaxshi");
//     return;
//   } else {
//     console.log("filallarimiz: ", arr[i], "da bor");
//   }
// }

obj = {
  id: 1,
  title: "the best",
    address: { street: "Farobiy", number: "34" },
};
let bormi = false;
for (let key in obj) {
  if (typeof obj[key] === "object") {
    bormi = true;
  }
}

console.log(bormi);
