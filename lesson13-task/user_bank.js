const userName = document.getElementById("user");
const passWord = document.getElementById("pass");
const btnLogin = document.getElementById("btn-login");



btnLogin.addEventListener("click", function () {
    for (let i = 0; i < users.length; i++) {
        if (userName.value === users[i].username && passWord.value === users[i].password) {
            alert("You are logged in")
            users[i].status_login = true;
            window.location.replace('loggedIn.html');
        } else {
            document.getElementById("msg-inc").innerHTML = "Incorrect Username Or Password"
        }
    }
});

