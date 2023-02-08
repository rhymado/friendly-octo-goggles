// ini DEMO JS
const batchSekarang = 14;
// console.log(typeof batchSekarang);
// typeof bisa digunakan untuk validasi tipe data
const superArray = [
  "Satu",
  2,
  true,
  null,
  undefined,
  () => {},
  [1, 2, 3],
  {
    string: "fazztrack",
    number: 0,
    boolean: false,
    "null value": null,
    undef: undefined,
    function: () => {},
    arr: [1, 2, 3],
    obj: { text: "Ini object" },
  },
];
const obj = superArray[7];
// console.log(obj["null value"]);
// for (let i = 1; i < 10; i = i + 2) {
//   console.log(i);
// }

// PERULANGAN ==========================================
let i = 10;
// console.log("while");
// while (i < 10) {
//   console.log(i);
//   i = i + 2;
// }
// console.log("do while");
// do {
//   console.log(i);
//   i = i + 2;
// } while (i < 10);

// PENGONDISIAN ========================================
// menentukan nilai grade ujian
// 85 - 100 : A
// 75 - 85  : B
// 65 - 75  : C
// 55 - 65  : D
// 0 - 55   : E

// asumsi nilai input 0 - 100
const nilai = 80;
let grade;
// if (nilai > 85) {
//   grade = "A";
// } else if (nilai > 75) {
//   grade = "B";
// } else if (nilai > 65) {
//   grade = "C";
// } else if (nilai > 55) {
//   grade = "D";
// } else {
//   grade = "E";
// }
// console.log(grade);
// tidak asumsi nilai input 0 - 100
// if (nilai > 100 || nilai < 0) {
//   console.log("Input Salah");
// } else if (nilai > 85) {
//   grade = "A";
// } else if (nilai > 75) {
//   grade = "B";
// } else if (nilai > 65) {
//   grade = "C";
// } else if (nilai > 55) {
//   grade = "D";
// } else {
//   grade = "E";
// }
// console.log(grade);

// const action = "REGISTER";
// switch (action) {
//   case "LOGIN":
//     console.log("SELAMAT DATANG");
//     break;
//   case "LOGOUT":
//     console.log("SAMPAI JUMPA");
//     break;
//   default:
//     console.log("SELAMAT MENIKMATI");
// }

// console.log(1 == "1")
// console.log(1 === "1")
// console.log(1 != "1")
// console.log(1 !== "1")

// FUNGSI ===================================
function penjumlahan(num1, num2) {
  const result = num1 + num2;
  console.log("fungsi", result); // output ke layar/console
  return result; // output ke code utama
}
// console.log("main code", penjumlahan(1, 2));
const addition = function (a, b) {
  const result = a + b;
  return result;
};

const additionArrow = (bil1, bil2) => {
  const result = bil1 + bil2;
  return result;
};
