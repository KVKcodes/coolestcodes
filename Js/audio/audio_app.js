function playAppClickAudio() {
  var audioFiles = [
    // "/Assets/audio/pen/dropping_pen.mp3",
    "/Assets/audio/app/app_sound_bloop.mp3",
  ];

  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  var audio = document.getElementById("phoneappclick");

  audio.volume = 0.3;

  audio.src = audioFiles[randomIndex];
  audio.play();
}

function playHomeButtonAudio() {
  var audioFiles = [
    // "/Assets/audio/pen/dropping_pen.mp3",
    "/Assets/audio/app/home_button.mp3",
  ];

  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  var audio = document.getElementById("homebuttonclick");

  audio.volume = 0.05;

  audio.src = audioFiles[randomIndex];
  audio.play();
}
