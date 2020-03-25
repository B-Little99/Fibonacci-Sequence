
function fSequence() {
    let number;
    let arr = [];
    let input = document.getElementById("input").value;

    if (arr.length === 0) {
        arr.push(1);
        arr.push(1);
    }
    for (i = 0; i < arr.length; i++) {
        number = (arr[0 + i]) + (arr[1 + i]);
        arr.push(number);
        if (arr.length >= input) {
            break;
        }
    }
    document.getElementById("resultSection").innerHTML = arr.join(", ");
}

function reset() {
    location.reload(true);
}