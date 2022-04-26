// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl =  document.getElementById("welcome-el")
let myName = "Greg"
let greeting = "Welcome back "

// function welcomeMessage() {
//     let message = greeting + myName
//     welcomeEl.innerText = message
// }

// welcomeMessage()

welcomeEl.innerText = greeting + myName
