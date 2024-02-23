const tasks = document.querySelector(".tasks");



function add() {
    const input = document.querySelector('input');
    const li = document.createElement('li');
    li.addEventListener = ("click", function (ev) {
        console.log(ev);
    })

    tasks.appendChild(li);
    input.value = "";
}

function keyup(ev) {
    if (ev.key === "Enter") {
        add();
    }
}