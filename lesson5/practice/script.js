function task1() {
    const userName = prompt("Hello this is from the hotel, What is your name?")

    if (!userName) {
        task1()
        return;
    }
    const days = prompt(`How many days would you like to stay ${userName}`);
    if (!days) {
        return
    }

    let price = days * 100

    alert(`Each days costs 100 so you will pay ${price} `);

    const breakbast = confirm("Breakfast costs 30, would you like to treat you with breakfast?")

    if (breakbast) {
        price += 30 * days;
    }

    alert(`Your total will be ${price}`);
}

function task2() {
    const name = prompt("Hello This is android, Waht is your name?");

    if (!name) {
        task2()
        return
    }

    const guests = prompt(`I have a question ${name}, how many guests are you going to be?`);

    const room = prompt("which room do you want?");

    let cost = 0;

    if (room === "m") {
        cost = 200;
    } else if (room === "l") {
        cost = 100;
    } else if (room === "xl") {
        cost = 50;
    }

    const days = prompt("how many days would you like to stay");

    let sum = days * guests * cost;

    alert(`to summerize for a stay of ${days} days with ${guests} guests in ${room} room , it would be a total of ${sum}`);

    let breakfastCost = 30;

    const breakfast = confirm("brakbest costs 30 shekels, would you like to add that option?");

    if (breakfast) {
        let newSum = sum += breakfastCost * guests;
        alert(`your total sum will be ${newSum}`)
    } else {
        alert(`your total will be ${sum}`);
    }
}

function task3() {
    const name = prompt("hello this is android, what is your name?");
    const guests = prompt(`i have a question ${name}, how many guests are you going to be?`);

    const m = 150;
    const l = 120;
    const xl = 80;

    let nights = 0;
    let cost = 0;

    if (guests <= 2 && guests > 0) {
        nights = prompt(`for a famaily of up to ${guests} it would cost you ${m} per person. how many nights would you like to stay?`);
        cost = m;
    } else if (guests <= 5) {
        nights = prompt(`for a famaily of up to ${guests} it would cost you ${l} per person. how many nights would you like to stay?`);
        cost = l
    } else if (guests <= 15 && guests >= 6) {
        nights = prompt(`for a famaily of up to ${guests} it would cost you ${xl} per person. how many nights would you like to stay?`);
        cost = xl;
    } else {
        alert("Sorry, we don't have suitable rooms for more than 15 guests. Please contact the hotel directly for special arrangements.");
        return; n
    }

    let sum = nights * guests * cost;

    alert(`to sum it up, for ${nights} nights for ${guests} guests it would cost you ${sum}`);

    let breakfastCost = 50;

    const breakfast = confirm("brakbest costs 50 shekels, would you like to add that option?");

    if (breakfast) {
        let newSum = sum += breakfastCost * guests;
        alert(`your total sum will be ${newSum}`)
    } else {
        alert(`your total will be ${sum}`);
    }
}

function task4() {
    const name = prompt("hello this is android, what is your name?");
    const guests = prompt(`i have a question ${name}, how many guests are you going to be?`);

    const m = 400;
    const l = 300;
    const xl = 150;

    let nights = 0;
    let cost = 0;

    if (guests <= 2 && guests > 0) {
        nights = prompt(`for a famaily of up to ${guests} it would cost you ${m} per person. how many nights would you like to stay?`);
        cost = m;
    } else if (guests <= 5) {
        nights = prompt(`for a famaily of up to ${guests} it would cost you ${l} per person. how many nights would you like to stay?`);
        cost = l
    } else if (guests <= 15 && guests >= 6) {
        nights = prompt(`for a famaily of up to ${guests} it would cost you ${xl} per person. how many nights would you like to stay?`);
        cost = xl;
    } else {
        alert("Sorry, we don't have suitable rooms for more than 15 guests. Please contact the hotel directly for special arrangements.");
        return; n
    }

    let sum = nights * guests * cost;

    alert(`to sum it up, for ${nights} nights for ${guests} guests it would cost you ${sum}`);

    let breakfastCost = 50;

    const breakfast = confirm("brakbest costs 50 shekels, would you like to add that option?");

    if (breakfast) {
        let newSum = sum += breakfastCost * guests;
        alert(`your total sum will be ${newSum}`)
    } else {
        alert(`your total will be ${sum}`);
    }

}

function task5() {
    const name = prompt("Hello this is android what is your name?");
    const arrival = confirm(` i have a question ${name}, are you coming alone`);

    let choice = null;
    let guests = 0;

    if (arrival) {
        alert("i can offer you a road motel");
        task1();
    } else {
        guests = prompt("how many guests will you be?")
    }

    if (guests > 1 && guests <= 15) {
        choice = prompt("I Can offer you a sport hotel, A Nature Hotel, And a sweet hotel, Which one do you wanna choose?");
    }

    if (choice === "sport") {
        task2();
    } else if (choice === "nature") {
        task3();
    } else if (choice === "sweet") {
        task4();
    }
}