let count = 1;

function counter(num) {
    count += num;
    document.getElementById("count").innerHTML = count;
}

// פונקציה שמקבלת 3 מספרים ומחזירה סיכום שלהם
function sum(num1, num2, num3) {
    return num1 + num2 + num3
}

function calcVat(num) {
    return num * 1.17;
}

function welcome(greet, fname, lname) {
    return greet + fname + lname;
}

function calcAvg(num1, num2, num3, num4) {

    //Method one using order of operations
    return (num1 + num2 + num3 + num4) / 4;

    //method Two saving the sum of the four numbers and then dividing it by 4

    // let sum = num1 + num2 + num3 + num4;
    // return sum /4;

}

