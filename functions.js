const cashWithdrawl = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

//cashWithdrawl(300, 1231231)

//function devloration
function square(number) {
    return number * number;
}

//console.log(square(5));

// Activity 1

const factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

//console.log(factorial(33));

// Activity 2

let orderCount = 1;

const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}. Order #: ${orderCount}.`);
    orderCount++;
}

//takeOrder("Pepperoni");
//takeOrder("Tuna");

// Activity 3

let pin = 1546;
let accountId = 1111;
let balance = Math.ceil(Math.random() * 100);

function atm(userPin, userId, withdraw) {
    if(accountId === userId) {
        if(pin === userPin) {
            if(withdraw <= balance) {
                console.log(`Your balance is: £${balance}.`)
                balance = balance - withdraw;
                console.log(`£${withdraw} withdrawn from your account, Your new balance is £${balance}`)
            } else {
                console.log(`Error: Your balance is £${balance} unable to withdraw £${withdraw} form your account.`)
            }
        } else {
            console.log("Error: Wrong pin.")
        }
    } else {
        console.log("Error: Unrecognised user.")
    }
}

atm(1546, 1111, 50);