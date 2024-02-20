function task1() {
    let i = 1;

    //using a while loop
    while (i <= 10) {
        console.log(i);
        i++
    }
    //Using a for loop
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function task2() {
    //Using a While Loop
    let i = 2;
    while (i <= 7) {
        console.log(i);
        i++;
    }
    //Using a For Loop

    for (let i = 2; i <= 7; i++) {
        console.log(i);
    }
}

function task3() {
    let i = 0;

    //using a while loop
    while (i <= 10) {
        console.log(i);
        i++
    }
    //Using a for loop
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

function task4() {
    let i = 3;

    //using a while loop
    while (i <= 8) {
        console.log(i);
        i++
    }
    //Using a for loop
    for (let i = 3; i <= 8; i++) {
        console.log(i);
    }
}

function task5() {
    let i = 2;

    //using a while loop
    while (i <= 20) {
        console.log(i);
        i += 2;
    }
    //Using a for loop
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

function task6() {
    let end = 50;
    let i = 0;
    //using a While Loop
    while (i <= end) {
        console.log(i)
        i++;
    }
    //Using a For Loop
    for (let i = 0; i <= end; i++) {
        console.log(i);
    }
}

function task7() {
    let num = 40;

    while (num <= 100) {
        console.log(num)
        num++;
    }

    for (let num = 40; num <= 100; num++) {
        console.log(num);
    }
}

function task8() {
    let start = 1;
    let end = 10;

    while (start <= end) {
        console.log(start);
        start++
    }

    for (let start = 1; start <= end; start++) {
        console.log(start);
    }
}

function task9() {
    let start = 10;
    const input = +document.getElementById("input1").value;

    while (start <= input) {
        if (input < start) {
            console.log(input);
        }
        console.log(start)
        start++
    }

    for (let start = 10; start <= input; start++) {
        if (input <= start) {
            console.log(start);
        }
    }
}

function task10() {
    const interval = 2;
    let start = 0;
    let end = 10;

    while (start <= end) {
        console.log(start);
        start += interval;
    }

    for (let start = 0; start <= end; start += interval) {
        console.log(start);
    }
}

