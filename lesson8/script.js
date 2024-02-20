const div = document.querySelector("#numbers");
const para = document.querySelector("#output");



function task1() {
    let num = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num) {
            num = numbers[i]
        }
        para.innerHTML = num;
    }
}

function task2() {
    let num = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < num) {
            num = numbers[i]
        }
        para.innerHTML = num;
    }
}

function task3() {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    para.innerHTML = sum;
}

function task4() {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const avarage = Math.floor(sum / numbers.length)
    para.innerHTML = avarage
}

function task5() {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = i;
    }
    para.innerHTML = total;
}

function task6() {
    numbers.sort(function (a, b) {
        return a - b;
    })
    para.innerHTML = numbers.join(", ");;
}

function task7() {
    numbers.sort(function (a, b) { return b - a });
    para.innerHTML = numbers.join(", ");;
}

function task8() {
    let randNuM = Math.floor(Math.random() * numbers.length);
    numbers.push(randNuM);
    console.log(randNuM);
    para.innerHTML = `${numbers}` + ", " + "<br>";
}

function task9() {
    let randNuM = Math.floor(Math.random() * numbers.length);
    numbers.unshift(randNuM);
    console.log(randNuM);
    para.innerHTML = numbers
}

function task10() {
    numbers.pop();
    para.innerHTML = numbers;
}

function task11() {
    const remove1 = numbers.splice(0, 1);
    numbers.splice(remove1);
    para.innerHTML = numbers;
}

const input1 = document.getElementById("input1");

function toStart() {
    numbers.unshift(input1.value);
    para.innerHTML = numbers.join(", ");
}

function toEnd() {
    numbers.push(input1.value);
    para.innerHTML = numbers.join(", ");
}

const input2 = document.getElementById("input2");

function removePos() {
    numbers.splice(input1.value, 1);
    para.innerHTML = numbers.join(", ")
}

function onInput(num) {
    let numb = num.value;

    if (numb !== numbers.indexOf()) {
        para.innerHTML = ""
    }
}