let result = Number("123") + 7;
console.log(result);

function testFalsy(value) {
    if (!value) {
        return "Invalid";
    }
    return value;
}
console.log(testFalsy(0));

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(i => i % 2 === 0);
console.log(evenNumbers);



const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);


function getDay(dayNumber) {
    switch (dayNumber) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid day";
    }
}
console.log(getDay(2));


const strings = ["gg", "xD", "hf"];
const lengths = strings.map(str => str.length);
console.log(lengths);


function checkDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }
    return "Not divisible by both";
}
console.log(checkDivisible(15));



const square = num => num * num;
console.log(square(5));



const person = { name: 'Ahmed', age: 25 };

function formatPerson({ name, age }) {
    return `${name} is ${age} years old`;
}
console.log(formatPerson(person));



function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));


function Success() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}
Success().then(res => console.log(res));



function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 3, 7, 2, 4])); // 7



function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys({ name: "Ameen", age: 25 ,gender: "male"}));


function splitString(str) {
    return str.split(" ");
}
console.log(splitString("The quick brown fox"));