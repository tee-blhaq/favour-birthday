// Create an Audio instance with the path to your MP3
const audio = new Audio('path/to/Anendlessocean.mp3');

// Play the sound (e.g., inside an event listener)
document.getElementById('playButton').addEventListener('click', () => {
  audio.play().catch(error => {
    console.error('Playback failed:', error);
  });
});