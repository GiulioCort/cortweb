const display = document.getElementById("schermo");

function aggiungi(input) {
    display.value += input;
}

function pulisci() {
    display.value = ""
}

function calcola() {
    display.value = eval(display.value)
}