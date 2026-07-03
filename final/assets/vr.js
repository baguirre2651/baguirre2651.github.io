var audio = document.getElementById("myAudio");
var isPlaying = false;

// Function to play audio with error handling for autoplay
function playAudio() {
    audio.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.log('Autoplay prevented, waiting for user interaction:', error);
    });
}

// Function to toggle play and pause
function togglePlay() {
    if (!audio) {
        return;
    }

    if (isPlaying) {
        audio.pause();  // Pause the song
        isPlaying = false;
    } else {
        playAudio(); // Play the song
    }
}

// Add event listener for click on the entire document
document.addEventListener('click', togglePlay);



const castleLink = document.getElementById('castle-link');

if (castleLink) {
  castleLink.addEventListener('click', function() {
    console.log("Castle clicked!");
  });
}
  
