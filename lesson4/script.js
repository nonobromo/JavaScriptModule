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

function checkNum() {
    let inputNum = document.getElementById("someNum");


    //אם הערך עבר את 100 איפסנו אותו
    //אם הערך מתחת ל 0 הגדרנו אותו כ 100
    //ע"מ לשמור על טווח בין 0 ל 100
    let num = +inputNum.value;


    if (num > 100) {
        inputNum.value = 0;
    } else if (num < 0) {
        inputNum.value = 100;
    }

    if (num <= 40) {
        output3.style.backgroundColor = "red";
    } else if (num <= 60) {
        output3.style.backgroundColor = "orange";
    } else if (num <= 80) {
        output3.style.backgroundColor = "blue";
    } else if (num <= 100) {
        output3.style.backgroundColor = "green";
    } else {
        output3.style.backgroundColor = ""
    }
}