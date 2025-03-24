// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');
function handleHeartClick(event) {
  const heart = event.target;

  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch((error) => {
        errorModal.classList.remove('hidden');
        errorModal.textContent = error;

        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  } else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

hearts.forEach((heart) => {
  heart.addEventListener('click', handleHeartClick);
});



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
