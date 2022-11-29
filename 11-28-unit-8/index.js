// ex 1

// let num = 30;

// let binary = num.toString(2);

// let sum_1 = null;
// let sum_2 = null;

// for (let i = 0; i < binary.length; i++) {
//   +binary[i] == 1 ? (sum_1 += 1) : (sum_2 += 1);
// }

// console.log(binary);
// console.log("1: " + sum_1);
// console.log("2: " + sum_2);

// let num = [1,3,4,5,6,2,4,7,45,8,9,4,6,10,24,65]
// ex 2
// console.log(Math.min(3,4,5,6,2,4,7,45,8,9,4,6,10,24,65));
// console.log(Math.max(1,3,4,5,6,2,4,7,45,8,9,4,6,10,24,65));

// ex 3
// Math bu metod
// trunc bu bizda kasr son berilgan bulsa uni faqat butun qismini kesib beradi
// floor bu yaxlitash bulib faqat sonlarni pasga qarab yaxitlaydi 2.9 bulsa ham bizga 2 chiqarib beradi.
// ceil bu sonlarni faqat tepaga qarab yaxlitlab beradi 2.1 bulsa bizga 2 chiqarib beradi
// parseInt bu sonlarni faqat butun qismini olib beradi bu kesib bermaydi shunchaki butun qismini olib beradi

// ex 4

// console.log(parseInt(Math.random()*50));

// String Homework

// const cut = (word, n) => {
//   return word.slice(0, n);
// };

// console.log(cut("webbrain acadmy", 5));

// let getCurrency = (data) => {
//   let num = "";
//   for (key of data) {
//     if (!isNaN(key)) {
//       num += key;
//     }
//   }
//   console.log(+num);
// };

// // getCurrency("$2$0$0$2");

// let word = "webbrain, academy, bunkerlab,";
// let checkWord = "";

// let arr = word.split(" ");

// for (key of arr) {
//   checkWord += key[0].toUpperCase()+key.substring(1);
// }
// console.log(checkWord);

// let word = "webbrain"
// let letter = "0"
// let arr = word.split("")
// for (key of arr){

// }

// let arr = [4, 7, 8, 12, 3, 45, 78, 34, 65, 33, 38];

// let max = null;
// let min = null;

// max = Math.max(...arr);
// min = Math.min(...arr);

// let colcul = max - min;

// console.log(-colcul);