function playPenMoveAudio() {
  var audioFiles = [
    // "/Assets/audio/pen/dropping_pen.mp3",
    "/Assets/audio/pen/pen_click.mp3",
  ];

  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  var audio = document.getElementById("penmove");

  audio.volume = 0.5;

  audio.src = audioFiles[randomIndex];
  audio.play();
}
