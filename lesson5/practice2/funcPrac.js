

let fullName = "Noam Abrmovich";
let username = "noamab22";
let password = "abc123";
isLogin = false;

function task1() {
    alert(`Hello ${fullName}`);
}

function task2() {
    const userCheck = prompt("Enter Username");
    const passWordCheck = prompt("Enter Password");

    if (userCheck !== username && passWordCheck !== password) {
        alert("try again");
        task2()
    } else {
        isLogin = true;
    }
}