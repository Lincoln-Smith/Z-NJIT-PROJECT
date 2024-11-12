let mCurrentIndex = 0 
let mImages = [] 
const mUrl = 'images.json' 
const mWaitTime = 5000
 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide() 

  // Call a function here to start the timer for the slideshow

  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section

  // Select the "Next Photo" button and add a click event to call showNextPhoto

  // Select the "Previous Photo" button and add a click event to call showPrevPhoto

  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  $.ajax({
    url: mUrl,
    dataType: 'json',
    success: (data) => {
      mImages = data.images
      swapPhoto() 
      startTimer()
    }
  })
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {
  if (mImages.length > 0) {
    $('#photo').attr('src', mImages[mCurrentIndex].imgPath)
  }
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  // Increment mCurrentIndex and call swapPhoto()
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
  // Decrement mCurrentIndex and call swapPhoto()
  // Ensure it loops to the end if mCurrentIndex is less than 0
}

// Starter code for the timer function
function startTimer () {
  setInterval(() => {
    mCurrentIndex = (mCurrentIndex + 1) % mImages.length 
    swapPhoto()
  }, mWaitTime)
}