// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNmbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNmbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right > 0) {
        dodger.style.left = `${right + 1}px`;
    }
}

// Demonstrate How to Move an Element in Response to a Browser Event
// Update an Element's Position on the Page Conditionally
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});




