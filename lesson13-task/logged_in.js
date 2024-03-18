


const greetUser = document.getElementById("greet-name");

let currentDate = new Date();

let dateHours = currentDate.getHours();

console.log(dateHours)

if (dateHours >= 0 && dateHours <= 5) {
    greetUser.innerHTML = `Good Evening`
} else if (dateHours >= 6 && dateHours <= 11) {
    greetUser.innerHTML = `Good Morning `
} else if (dateHours >= 12 && dateHours <= 17) {
    greetUser.innerHTML = `Good Afternoon`
} else if (dateHours >= 18 && dateHours <= 24) {
    greetUser.innerHTML = `Good Evening`
}


document.getElementById("balance").innerHTML = "Your current ballance is: " + users[0].total
document.getElementById("credit").innerHTML = "your balance is: " + users[0].credit

function add() {
    let ammount = prompt("How many funds would you like to add?");
    users[0].total += +ammount
    document.getElementById("balance").innerHTML = "Your current ballance is: " + users[0].total
}

function remove() {
    let remove = +prompt("How many funds would you like to withdraw?");
    if (remove > 500) {
        alert("you cant withdraw that much!")
    } else {
        users[0].total -= remove;
        document.getElementById("balance").innerHTML = "Your current ballance is: " + users[0].total
    }
}

function change() {
    let change = +prompt("To how much credits would you like to change?");
    let enterPass = prompt("Enter Your Password");

    if (enterPass !== users[0].password && users[0].status_login !== true) {
        alert("inccorrect password")
    } else {
        users[0].credit = change
        document.getElementById("credit").innerHTML = "your balance is: " + users[0].credit
    }
}