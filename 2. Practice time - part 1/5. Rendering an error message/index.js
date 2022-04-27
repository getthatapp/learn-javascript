// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorPing = document.getElementById("error")
console.log(errorPing)

function purchase() {
    console.log("button clicked")
    errorPing.textContent = "Something went wrong, please try again"
}



