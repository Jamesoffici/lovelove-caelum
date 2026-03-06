window.onload = () => {
  const container = document.querySelector('.container');
  if (container) {
    container.classList.remove("container");
  }

  // Play background music
  const music = document.getElementById('bgMusic');
  if (music) {
    music.volume = 0.5; // Optional: set volume (0.0 to 1.0)
    
    // Attempt to play
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay was prevented. Music will start after user interaction.");
            // Optional: Start music on first click if autoplay is blocked
            document.body.addEventListener('click', () => {
                music.play();
            }, { once: true });
        });
    }
  }
};