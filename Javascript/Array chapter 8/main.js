const myArr = [1, 2, 3, 4, 5];
const myHerros=["spiderman","superman","batman","ironman","thor"];
console.log(0);



//Arry methods
//1- push
//2- pop
//3- shift
//4- unshift
//5- slice
//6- splice
//7- concat
//8- includes

    myArr.push(6);
    console.log(myArr);


// pop is working last element remove
myHerros.pop();
console.log(myHerros);



///shift is working first element remove
myArr.shift();
console.log(myArr);


//unshift is working first element add
myArr.unshift(0);
console.log(myArr);


//slice is working copy of array
const myArr2 = myArr.slice(1,3);
console.log(myArr2);

//splice is working add or remove element
myArr.splice(2,2,6,7);
console.log(myArr);
//concat is working add array
const myArr3 = myArr.concat(myArr2);
console.log(myArr3);
//includes is working true or false
console.log(myArr.includes(5));
console.log(myArr.includes(9));





// let a = 6;
// let b = "2";


// a===b;


// console.log(a > ++b);
let age = 50;
let res = "pak";

false || (true && false);
false || false; // false

let a = 5;
let b = a++;

console.log(a); // 6
console.log(b); // 5

if (card) {
  if (attendace) {
    console.log("aajao");
  }
}

// array aur object hamesha const se banta hy
const fruits = ["banana", "apple", "zoo", "mango"];

const n = fruits.length - 1;
// getting last element
console.log(fruits[n]);

//
// aakhir se
fruits.push("pineapple", "orange"); // adds element and return new array length

fruits.pop(); // removes last element
fruits.pop(); // returns removed value

fruits.splice(3, 1); // remove pineapple

// shuru se
// not recommended
fruits.unshift("shehzad");

fruits.shift();
fruits.shift();

fruits[1] = "shehzad";

// ulta karde ga
console.log(fruits.reverse());

const nums = [3, 2, 0, 1, 100, 4, 5, 9, 6, 9];

console.log(fruits.sort()); // alphabetic sorting

console.log(nums.sort((a, b) => a - b)); // for number sorting