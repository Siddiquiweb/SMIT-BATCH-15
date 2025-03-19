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