
function fSequence() {
    let number;
    let arr = [];
    let input = document.getElementById("input").value;

    if (arr.length === 0) {
        arr.push(1);
        arr.push(1);
    }
/* 
The above code adds the first two numbers to the array used for the sequence. Since it was only two numbers I did not feel that a loop was necessary in this instance.
*/
    for (i = 0; i < arr.length; i++) {
        number = (arr[0 + i]) + (arr[1 + i]);
        arr.push(number);
        if (arr.length >= input) {
            break;
        }
    }
    document.getElementById("resultSection").innerHTML = arr.join(", ");
}

document.getElementById("resetButton").addEventListener("click", function reset(){
    location.reload()
  });