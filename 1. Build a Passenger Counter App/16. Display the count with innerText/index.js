// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    countEl.innerText = count
    // set countEl's innerText to the count
}


