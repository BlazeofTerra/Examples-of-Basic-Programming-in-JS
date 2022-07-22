let userName = "Bob";
let balance = Math.round(Math.random() * 100)

if(balance >= 5) {
    console.log(`Hey there ${userName}! Your bank balance is £${balance} you may withdraw in multiples of 5.`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('How much would you like to withdraw?', userInput => {
        if(userInput % 5 == 0 && userInput < balance) {
            console.log(`*The ATM sounds like your washing machine for a moment before depsiting £${userInput}* \nYour new balance is £${balance - userInput}.`)
        } else if(userInput > balance) {
            console.log(`Error: Unable to withdraw £${userInput}.`)
        } else if(userInput % 5 != 0) {
            console.log(`Error: No £${userInput.slice(-1)} notes available.`)
        } else {
            console.log(`Error.`)
        }
        readline.close();
    });
} else {
    console.log("Error: You do not have enough money in your account to withdraw £5. Gutted.")
}