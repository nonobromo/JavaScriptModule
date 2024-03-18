function task1(el) {
    setTimeout(function () {
        el.style.display = "none";
    }, 100)
};

let count = 1;

let myInt;

function task2(elem) {
    if (myInt) {
        clearInterval(myInt)
        myInt = undefined;
    } else {
        myInt = setInterval(function () {
            elem.innerHTML = count++;
        }, 100)
    }
}