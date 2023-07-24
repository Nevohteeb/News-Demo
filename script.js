// // Exercise 1
let numbers = [1, 2, 3, 4];
let doubles = numbers.map(function(num) {
    return num * 2;
});
console.log(doubles); // Output: [2, 4, 6, 8]

// Exercise 2
let fruits = ["apple", "banana", "orange", "kiwi"];
let aFruits = fruits.filter(function(fruit) {
    return fruit.includes("a");
});
console.log(aFruits); // Output: ["apple", "banana"]

// // Exercise 3
let people = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
let sortedPeople = people.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});
console.log(sortedPeople); // Output: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}]

// // Exercise 4
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evens); // Output: [2, 4]

// // Exercise 5
let fruits = ["apple", "banana", "orange", "kiwi"];
let lengths = fruits.map(function(fruit) {
return fruit.length;
});
console.log(lengths); // Output: [5, 6, 6, 4]


// // Exercise 6
let people = [{ score: 80 }, { score: 90 }, { score: 70 }];
let sortedPeople = people.sort(function(a, b) {
return b.score - a.score;
});
console.log(sortedPeople); // Output: [{score: 90}, {score: 80}, {score: 70}]

// // Exercise 7
let fruits = ["apple", "banana", "orange", "kiwi"];
let longFruits = fruits.filter(function(fruit) {
return fruit.length > 5;
});
console.log(longFruits); // Output: ["banana", "orange"]

// // Exercise 8
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(num) {
return num ** 2;
});
console.log(squares); // Output: [1, 4, 9, 16]
