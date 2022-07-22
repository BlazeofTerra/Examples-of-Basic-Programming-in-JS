/*let name = "Thomas Hunt";
let age = 26;
let colour = "Purple";

console.log(`My name is ${name}, I am ${age} years old and my favorite colour is ${colour}.`)

name = "Dave";
age = 2;
colour = "Blue";

console.log(`My name is ${name}, I am ${age} years old and my favorite colour is ${colour}.`)

let food = {
    breakfast: "Bacon and egg butty",
    lunch: "Crisps",
    dinner: "Bangers and mash"
}

console.log(`I had ${food.breakfast} for breakfast, ${food.lunch} for lunch and ${food.dinner}.`)

food.breakfast = "Porridge";
food.lunch = "Bagel";
food.dinner = "Pizza";

console.log(`I had ${food.breakfast} for breakfast, ${food.lunch} for lunch and ${food.dinner}.`)

let today = new Date();
let birthday = new Date(2023, 0, 30);

let differance =  birthday - today;
let days = Math.ceil(differance / (1000 * 3600 * 24));

console.log(days)*/

let count = 1;
let x = "X";
let o = "O";
let empty = " ";
let non = "   |   |   ";

for(let i = 0; i <= 2; i++) {
    if(count == 1) {
        console.log(non)
        console.log(` ${x} | ${o} | ${empty} `)
        console.log(non)
    } else if (count == 2) {
        console.log(non)
        console.log(` ${x} | ${x} | ${empty} `)
        console.log(non)
    } else {
        console.log(non)
        console.log(` ${o} | ${empty} | ${empty} `)
        console.log(non)
    }

    if(count != 3) {
        console.log("-----------")
    }
    
    count++;
}