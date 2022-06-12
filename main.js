// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Grab the DOM element by it's ID. 
const errorMsg = document.querySelector("#modal");
// Assign DOM element a new class to inherit desired CSS properties.
errorMsg.className ="hidden";

function likePost(){

};

// Grab DOM element, assign it an event based on user click.
// Invoke fn to simulate server response.
document.querySelector(".like-glyph").addEventListener('click', mimicServerCall)
.then(() => {document.querySelector(".like-glyph").className = ".activated-heart"})
.catch(() => {errorMsg.className = "modal";})
.then(setTimeout(errorMsg.className = "hidden", 300))

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
