function task1() {
    let i = 2;
    let res = '';

    while (i <= 100) {
        res += i + ', ';
        i += 2;
    }

    document.getElementById("output1").innerHTML = res;
    document.getElementById("btn").remove();
}

function task2(elem) {
    const num = +elem.value;
    let isPrime = true;

    let i = 2;

    while (i < num) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }

        i++;
    }

    const output = document.getElementById("output2");

    if (isPrime) {
        output.innerHTML = 'ראשוני';
        output.style.color = "blue";
    } else {
        output.innerHTML = 'פריק';
        output.style.color = "green";
    }
}

function task3() {
    const num = +document.getElementById("num1").value;
    let result = '';

    let i = 1;

    while (i <= num) {
        result += i + ', ';

        i++;
    }

    document.getElementById("output3").innerHTML = result;
}

function task4() {
    const num1 = document.getElementById("num3").value;
    const num2 = document.getElementById("num4").value;

    let result = '';
    let i = +num1;

    while (i < num2) {
        document.getElementById("output4").innerHTML = result
        i++;
        result += i;
    }
}

function task5(el) {
    const num = el.value;

    let i = 1;
    while (i <= num) {
        if (num % i === 0) {
            console.log(i);
        }
        i++;
    }
}

function task6() {
    const num = document.getElementById("num6").value;

    let result = 1;
    let i = 1;


    while (i <= num) {
        result *= i;
        i++;
    }
    console.log(result)
}