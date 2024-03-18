const user = {
    fullName: "Noam Abrmovich",
    username: "noamab22",
    password: "noam123",
    is_Login: false,
}

function task1_2() {
    console.log(typeof user)
    alert(`hello ${user.fullName}`);
}

function task3() {
    let changeName = prompt("Enter A Full Name");

    user.fullName = changeName;

    console.log(user.fullName);
}

function task4() {
    let username = prompt("Enter Username");
    let password = prompt("Enter Password");

    if (username === user.username && password === user.password) {
        user.is_Login = true;
        console.log("You are logged in");
    }
}

function task5() {
    user.is_Login = false;
}

function task6() {
    let currentPassword = prompt("enter your currnet password");
    let newPassword = prompt("Enter a new password");

    if (currentPassword === user.password) {
        user.password = newPassword
        console.log("password changed")
    } else {
        console.log("old password incorrect");
    }
}

