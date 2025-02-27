let num1 = parseInt("42");
console.log(num1); // Output: 42 (Number ban gaya)


let num2 = parseInt("42px");
console.log(num2); // Output: 42 (px ignore ho gaya)


let num3 = parseFloat("3.14");
console.log(num3); // Output: 3.14 (Decimal number)


let num4 = parseFloat("3.14abc");
console.log(num4); // Output: 3.14


let num5 = Number("123");
console.log(num5); // Output: 123



let num6 = Number("123abc");
console.log(num6); // Output: NaN (Invalid number)



let num7 = +"456";
console.log(num7); // Output: 456



// let result = Number("abc");
// if (isNaN(result)) {
//   console.log("Invalid number!");
// } else {
//   console.log(result);
// }




console.log(parseInt("99 bottles"));  // ?
console.log(parseFloat("12.34px"));  // ?
console.log(Number("50.5"));        // ?
console.log(+"78kg");               // ?
