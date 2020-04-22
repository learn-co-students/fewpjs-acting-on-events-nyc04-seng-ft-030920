// move dodger left

let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        console.log("moved left")
    }
});

// move dodger right

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if (left < 360) {
        dodger.style.left = `${left + 10}px`
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
        console.log("moved right")
    }
})