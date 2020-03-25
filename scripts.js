
function fSequence() {
    let number;
    let arr = [];
    let input = document.getElementById("input").value;

/* 
The above code adds the first two numbers to the array used for the sequence. Since it was only two numbers I did not feel that a loop was necessary in this instance.
*/
    for (i = 0; i < input; i++) {
        if (i === 0 || i === 1) {
            arr.push(1);
        }
        else (number = (arr[i]) + (arr[1 + i]))
        arr.push(number);
        {}
    }
    document.getElementById("resultSection").innerHTML = arr.join(", ");
}

document.getElementById("resetButton").addEventListener("click", function reset(){
    location.reload()
  });