function task1() {
    let i = 2;
    let res = '';

    while (i <= 100) {
        res += i + ', ';
        i += 2;
    }

    document.getElementById('output1').innerHTML = res;
    document.getElementById('btn').remove();
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

    const output = document.getElementById('output2');

    if (isPrime) {
        output.innerHTML = 'ראשוני';
        output.style.color = 'blue';
    } else {
        output.innerHTML = 'פריק';
        output.style.color = 'green';
    }
}

function task3() {
    const num = +document.getElementById('num1').value;
    let result = '';

    let i = 1;

    while (i <= num) {
        result += i + ', ';

        i++;
    }

    document.getElementById('output3').innerHTML = result;
}

function task4() {
    let num1 = document.getElementById('num3').value;
    let num2 = document.getElementById('num4').value;

    let result = '';

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2)

    while (start <= end) {
        result += start + ',';
        start++;
    }
    document.getElementById('output4').innerHTML = result;
}

function task5(el) {
    const num = el.value;
    let result = '';

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result += i + " ";
        }
    }
    document.getElementById('output5').innerHTML = result += ' ';
}

function task6() {
    const num = document.getElementById('num6').value;

    let result = '';
    let calc = 1;

    for (let i = 1; i <= num; i++) {
        calc *= i;
        result += i;

        if (i !== num) {
            result += ' * '
        }
    }
    document.getElementById('output6').innerHTML = `${result} = ${calc}`;
}

function task7() {
    const num = document.getElementById('num7').value;

    let result = '';

    for (let i = 0; i < num; i++) {
        result += "*"
    }

    document.getElementById('output7').innerHTML = result;
}

function task8() {
    const num = document.getElementById('num8').value;

    let result = '';

    for (let i = 1; i <= num; i++) {
        result += "*" + "<br>";
    }
    document.getElementById('output8').innerHTML = result;
}
