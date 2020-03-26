function fSequence() {
    let number;
    let arr = [];
    let input = document.getElementById("input").value;

    for (i = 0; i < input; i++) {
        if (i === 0 || i === 1) {
            arr.push(1);
        }
        else { 
            number = (arr[i - 2]) + (arr[i - 1])
            arr.push(number);
        }
    }
    document.getElementById("resultSection").innerHTML = arr.join(", ");
}

document.getElementById("resetButton").addEventListener("click", function reset(){
    location.reload()
  });