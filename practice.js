//find cheapest- product

// var products = [
//     { phone: 'saomi', price: 17000, color: 'white' },
//     { phone: 'samsung', price: 14000, color: 'white' },
//     { phone: 'realmi', price: 23000, color: 'white' },
//     { phone: 'redmi', price: 20000, color: 'white' }
// ]
// var cheapestPhone = products[0];

// for (const phone of products) {

//     if (phone.price < cheapestPhone.price) {
//         cheapestPhone = phone;
//     }

// }
// console.log(cheapestPhone);



var laptops = [
    { name: 'dell', price: 34000, color: 'black' },
    { name: 'hp', price: 55000, color: 'White' },
    { name: 'walton', price: 10000, color: 'white' }
]
total = 0;
let cheap = laptops[0];
for (const laptop of laptops) {
    if (laptop.price < cheap.price) {
        cheap = laptop;
    }
    total = laptop.price + total;
}
console.log(total);
console.log(cheap);


//factioral

var factorial = 1;
for (var i = 1; i <= 4; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// factorial while loop

var fact = 1;
var i = 1;
while (i <= 4) {
    fact = fact * i;
    i++;
}
console.log(fact);


// swap

var x = 5;
var y = 6;
console.log(x, y);

var temp = x;

x = y;
y = temp;
console.log(x, y);



// random number
let max = Math.random() * 10;
let round = Math.round(max);
console.log(round);


// max
var numbers = Math.max(21, 46, 87);
console.log(numbers);


// function secondLargestNumber(number) {
//     let largest = number[0];
//     let secondLargest = number[0];
//     for (let i = 0; i < number.length; i++) {

//         let element = number[i];
//         if (element > largest) {
//             secondLargest = largest;
//             largest = element;
//         }

//         else if (element > secondLargest) {
//             secondLargest = element;
//         }
//     }
//     return secondLargest;
// }

// numberIs = secondLargestNumber([34, 56, 90, 99, 100, 54, 76, 101]);
// console.log('the second largest number is :', numberIs);



var array = [10, 20, 30, 40];
var sum = 0;
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    sum = sum + element;
}
console.log(sum);



// leap year

function leap(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
        console.log('is leap year', true);
    }

    else {
        console.log('is leap year', false);
    }
}


var numarray = [23, 54, 76, 32, 100, 102, 65, 80];
var largest = numarray[0];

for (var i = 0; i < numarray.length; i++) {
    var element2 = numarray[i];
    if (element2 > largest) {
        largest = element2;
    }
}

console.log(largest);



