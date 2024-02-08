function replace() {
    const num1 = document.getElementById("str1");
    const num2 = document.getElementById("str2");

    change1 = num1.value;
    change2 = num2.value;

    num1.value = change2;
    num2.value = change1;
}

function salerycalcultor() {
    const user = document.getElementById("user").value;
    let paycheck = +document.getElementById("salery").value;
    let result = document.getElementById("output4");

    if (paycheck <= +6000) {
        paycheck = paycheck + paycheck / +100 * +10;
    } else {
        paycheck = paycheck + paycheck / +100 * +5;
    }
    result.innerHTML = `${user} salery is ${paycheck}`;
}

function check() {
    const age = document.getElementById("age").value;
    const height = document.getElementById("number").value;
    const check = document.getElementById("output5");

    if ((age >= 14 && age <= 18 || age >= 21 && age <= 26) && height >= 182) {
        check.innerHTML = "you are qualified";
    } else {
        check.innerHTML = "you are not qualified";
    }

}