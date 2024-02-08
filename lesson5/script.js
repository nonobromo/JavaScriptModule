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