let counter = 0;
function increase() {
    // הגדלת משתנה ב 1
    counter++;
    //הכנסת ערך ב HTML
    document.getElementById("number").innerHTML = counter;
    //הגדלת גודל הטקסט
    document.getElementById("number").style.fontSize = counter + "em";
}

function decrease() {
    // הקטנת משתנה ב 1
    counter--;
    // הכנסת ערך ב HTML
    document.getElementById("number").innerHTML = counter;
    // הקטנת גודל הטקסט בהתאם לערך של המספר
    document.getElementById("number").style.fontSize = counter + "em";
}

function bestCity() {
    const city = document.getElementById("city").value;
    if (city == "נתניה") {
        document.getElementById("output1").innerHTML = "טעות!";
    } else if (city == "חיפה") {
        document.getElementById("output1").innerHTML = "נכון!";
    } else if (city == "פתח תקווה") {
        document.getElementById("output1").innerHTML = "טעות!";
    } else if (city == "הרצליה") {
        document.getElementById("output1").innerHTML = "טעות!";
    } else if (city == "חולון") {
        document.getElementById("output1").innerHTML = "טעות!";
    } else if (city == "אשלקון") {
        document.getElementById("output1").innerHTML = "טעות!";
    } else if (city == "חדרה") {
        document.getElementById("output1").innerHTML = "טעות!";
    } else if (city == "ראשון לציון") {
        document.getElementById("output1").innerHTML = "טעות!";
    }
}

function login() {
    const username = "banana";
    const password = "a123";
    let userValue = document.getElementById("username").value;
    let passValue = document.getElementById("password").value;
    const output2 = document.getElementById("output2");
    if (username == userValue && password == passValue) {
        output2.innerHTML = "ברוך הבא";
        output2.style.color = "green";
    } else {
        output2.innerHTML = "נסה שוב";
        output2.style.color = "red";
    }
}