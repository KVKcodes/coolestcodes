function playPageFlipAudio() {
  var audioFiles = [
    // "/Assets/audio/book/page-flip-1sec-1.mp3",
    // "/Assets/audio/book/page-flip-1sec-2.mp3",
    // "/Assets/audio/book/page-flip-2sec-1.mp3",
    // "/Assets/audio/book/page-flip-2sec-2.mp3",
    "/Assets/audio/book/pageflip_fast_1.mp3",
    "/Assets/audio/book/pageflip_fast_2.mp3",
    "/Assets/audio/book/page-flip-1sec-3.mp3",
    "/Assets/audio/book/pageflip_fast_3.mp3",

  ];

  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  var audio = document.getElementById("pageflip");
  audio.volume = 0.3;

  audio.src = audioFiles[randomIndex];
  audio.play();
}

