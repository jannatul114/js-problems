// practice - 1
var name = 'mithila';
var nameMithila = true;
var year = 2022;

//practice - 2
let currenYear = 2021;
const myName = 'mithila';
currenYear = 2022;
console.log(currenYear);

//practice - 3

var num1 = 6;
var num2 = 5;
var total = num1 + num2;
var multiply = num1 * num2;
var diveid = num1 / num2;
var reminder = num1 % num2;
console.log('total :', total, 'multiply:', multiply, 'diveid :', diveid, 'reminder', reminder);


//practice - 4

var number1 = 4;
var number2 = 6;

if (number1 < number2) {
    console.log('number 1 is smaller then number 2');
}

else if (number1 > number2) {
    console.log('number 1 is bigger then number 2');
}

else if (number1 == number2) {
    console.log('both numbers are equal');
}

else if (number1 !== number2) {
    console.log('number 1 is not equal of number 2');
}

//practice - 5
var year = 2022;
if ((year > 2020 && year == 2023) || (2050 > year)) {
    console.log('happy new year', year);
}


//practice - 6

var bujhtePara = false;
if (bujhtePara == true) {
    console.log('practice koro');
}

else if (bujhtePara == false) {
    console.log('video aber dakho')
}

//practice - 7

var i = 7;
while (i <= 19) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

//practice - 8

const array = [34, 56, 87, 23, 98, 54, 36];
let length = array.length;
console.log(length);
array[4] = 100;
console.log(array);
array.push(101, 102);
console.log(array);
array.pop();
console.log(array);


//practice - 9
const array2 = [101, 102, 103, 104, 105, 106];
for (index of array2) {
    // console.log(index);
}


//practice - 10
const numberArray = [10, 30, 60, 80, 20, 90, 101, 200];
for (var i = 0; i < numberArray.length; i++) {
    var elements = numberArray[i];

    if (elements > 80) {
        console.log(elements);
    }
}


//practice - 11
var x = 5;
var y = 5;
var z = 5;
var multiplyNumbers = x * y * z;
console.log(multiplyNumbers);


//practice - 12

var student = {
    name: 'rodela', roll: 10, class: 10,
}
console.log(student);

student.name = 'asma';
console.log(student);



//problem solving

// 1 feet to inch

function feetToInch(feet) {
    var inch = feet * 12;
    return inch;
}

var myFeet = feetToInch(3);
console.log(myFeet);


// 2 centimeter to meter

function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
var centimeter = centimeterToMeter(4);
console.log(centimeter);



// paper Requirements
function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    var book1 = book1Pages * firstBookCopy;
    var book2 = book2Pages * secondBookCopy;
    var book3 = book3Pages * thirdBookCopy;
    var totalPages = book1 + book2 + book3;
    return totalPages;
}

var myBooks = paperRequirements(2, 2, 2);
console.log(myBooks, 'pages');


// largest friend name


function bestFriend(nameArry) {
    let largestName = '';
    for (var i = 0; i < nameArry.length; i++) {
        var element = nameArry[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}
const friendsName = ['samsun nahar hridita', 'rodela khanom', 'jannatul ferdaous mithila', 'asma', 'tamanna'];
var largeName = bestFriend(friendsName);
console.log(largeName);



//positive number
var positiveNumbers = [];
var numsArray = [34, 56, 87, 56, -53, 76, -64];
for (let i = 0; i < numsArray.length; i++) {
    var element1 = numsArray[i];
    if (element1 < 0) {
        break;
    }

    else if (element1 >= 0) {
        positiveNumbers = element1;
    }
    console.log(positiveNumbers);
}


// var fibo = [0, 1];
// for (var i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }

// console.log(fibo);



function fibonacciSerics(num) {
    if (typeof num != 'number') {
        return 'please give a number';
    }

    if (num < 2) {
        return 'please enter a positive number greater then 2';
    }

    const fibo = [0, 1];
    for (var i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}

var myFebo = fibonacciSerics(10);
console.log(myFebo);



// duplicate items

var myNumberArray = ['abul', 'babul', 'kabul', 'labul', 'babul', 'sabul', 'abul'];
var unique = [];
for (var i = 0; i < myNumberArray.length; i++) {
    var arrayElements = myNumberArray[i];
    if (unique.indexOf(arrayElements) == -1) {
        unique.push(arrayElements);
    }
}
console.log(unique);



//reverse string
var revString = 'hello how are you?';
function reverseString(strings) {
    var reverse = '';
    for (const letter of strings) {
        reverse = letter + reverse;
    }
    return reverse;
}
const arr = reverseString(revString);
console.log(arr);








