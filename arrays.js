// Activity 1

/*let favFilms = [
    "Iron Man",
    "Home Alone",
    "Back to the future",
    "Hellboy",
    "Narnia"
]

let count = 0;

favFilms.push("Kingsmen", "James Bond")

while(count < favFilms.length) {
    console.log(favFilms[count])

    count++   
}*/

// Activity 2

/*let nums = []

for(i = 0; i < 6; i++) {
    nums.push(Math.floor(Math.random() * 50))
}

console.log(nums)*/

// Activity 3

/*let count = 10

while(count != 0) {
    count--
    console.log(count)
}*/

// Activity 4

/*let favFilms = [
    "The Goonies",
    "Hook",
    "Ghostbusters",
    "Muppets"
]

for(count = 0; count < favFilms.length; count++) {
    console.log(favFilms[count])

    if(favFilms[count] == "Ghostbusters") {
        console.log("I ain't afraid of no ghost.")
    } else {
        console.log("I want the marshmellow giant!")
    }
}*/

// Activity 5

/*let num = 0;
let count = 0;

while(count <= 6) {
    num = Math.ceil(Math.random() * 30)
    
    if(num % 7 == 0) {
        console.log(`${num} number is divisable by 7`)
    } else {
        console.log(`${num} number is not divisable by 7`)
    }

    count++;
}*/

// Activity 6

/*let cultOfBob = [
    "David Bowie",
    "The Doctor",
    "John Smith",
    "Will Smith",
    "Jackie Chan",
    "Bob Dillan"
]

let cultOfHannah = [
    "Matt Smith",
    "David Tennant",
    "David Bowie",
    "The Doctor",
    "Jackie Chan",
    "Bob Dillan"
]

let match = []

for(count = 0; count < cultOfBob.length; count++) {
    for(countHannah = 0; countHannah < cultOfHannah.length; countHannah++) {
        if(cultOfBob[count] == cultOfHannah[countHannah]) {
            match.push(cultOfBob[count])
        }
    }
}

if(match.length > 2) {
    console.log(`Both ${match[0]},`)
} else {
    console.log(`Both ${match[0]} and`)
}

for(matchCount = 1; matchCount < match.length; matchCount++) {
    if(match.length > 2 && match.length-1 != matchCount) {
        if(match.length > 3 && match.length-2 != matchCount) {
            console.log(`${match[matchCount]},`)
        } else {
            console.log(`${match[matchCount]} and`)
        }
    } else {
        console.log(`${match[matchCount]} are in both cults.`)
    }
}*/

// Activity 7

/*let countWhile = 1;
let countDooku = 1;

for(countFor = 1; countFor <= 3; countFor++) {
    console.log(countFor)
}

while(countWhile <= 3) {
    console.log(countWhile)
    countWhile++
}

do {
    console.log(countDooku)
    countDooku++
}

while(countDooku <= 3);*/