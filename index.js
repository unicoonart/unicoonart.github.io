const video = document.getElementById('my-video');

function playVideo() {
  video.play();
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'd') {
    playVideo();
  }
});

