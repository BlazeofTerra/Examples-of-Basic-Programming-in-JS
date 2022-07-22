/*const car = {
    make: "McLaren", 
    model: "Senna", 
    layout: "RR", 
    release: 2019, 
    engine: "4.0L V8", 
    power: 789, 
    weight: 1374,
    paintOptions: ["Red", "Blue", "Green", "Black", "Silver", "White"],
    makeModel: function() {
        return this.make + " " + this.model;
    }
};

const person = {
    firstName: "Thomas",
    lastName: "Hunt",
    age: 26,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

//console.log(`My name is ${person.fullName()} and I am ${person.age} years old.`)

//console.log(`I wish my car was a ${car.makeModel()}. It has a ${car.layout} layout with a ${car.engine} outputting ${car.power}hp, weighing ${car.weight}kg.`)

let alarmSetting = "";
let days = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"]
const random = Math.floor(Math.random() * days.length);

const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
}

if(random == 5 || random == 6) {
    alarmSetting = alarm.weekendAlarm
} else {
    alarmSetting = alarm.weekdayAlarm
}

console.log(`Its ${days[random]}. ${alarmSetting}`)*/

const coffeeShop = {
    branch: "Manchester",
    food: [["Crisp", 1], ["Sweets", 1.50], ["Chocolate", 2]],
    drinks: [["Water", 1], ["Fanta", 1.50], ["Red Bull", 2]]
}

let total = 0;
order = ["food-0", "food-1", "food-2", "drinks-1", "drinks-2"];

console.log("Your order is:")

for(count = 0; count < order.length; count++) {
    let orderSplit = order[count].split("-");
    total += coffeeShop[orderSplit[0]][orderSplit[1]][1];

    console.log(`${coffeeShop[orderSplit[0]][orderSplit[1]][0]}: £${coffeeShop[orderSplit[0]][orderSplit[1]][1].toFixed(2)}.`)
}

console.log(`Your total is: £${total.toFixed(2)}.`)