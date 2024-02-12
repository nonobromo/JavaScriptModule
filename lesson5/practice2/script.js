function task1() {
    const num1 = +prompt("Enter a number");
    const num2 = +prompt("Enter a number");

    console.log(num1 + num2);
}

function task2(num1, num2) {
    console.log(+num1 + +num2)
}

function task3() {
    const num1 = +prompt("Enter a number");
    const num2 = +prompt("Enter a number");

    const displayNum = document.getElementById("display");

    displayNum.innerHTML = num1 + num2;
}

function task4(n1, n2) {
    const displayNum = document.getElementById("displayOne");

    displayNum.innerHTML = n1 + n2;
}

function task5() {
    const num1 = +prompt("Enter a number");
    const num2 = +prompt("Enter a number");

    console.log(num1 * num2);
}

function task6(no1, no2) {
    console.log(+no1 * +no2);
}

function task7() {
    const num1 = +prompt("Enter a number");
    const num2 = +prompt("Enter a number");
    const displayNum = document.getElementById("displayTwo");
    displayNum.innerHTML = num1 * num2;
}

function task8(numb1, numb2) {
    const displayNum = document.getElementById("displayThree");
    displayNum.innerHTML = numb1 * numb2;
}

function task9() {
    const price = +prompt("Enter A Number");
    const added = price / 100 * 10;
    console.log(price + added);
}

function task10(price) {
    console.log(price + +price / +100 * +10);
}

function task11() {
    const displayNum = document.getElementById("displayFour");
    const number = +prompt("Enter a number");
    const taxAdd = number / 100 * 10;

    displayNum.innerHTML = number + taxAdd;
}

function task12(debt) {
    const taxDebt = debt / +100 * +10;
    const displayNum = document.getElementById("displayFive");

    displayNum.innerHTML = debt + taxDebt;
}