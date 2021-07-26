const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const mute = document.getElementById('mute');
const unmute = document.getElementById('unmute');
const volume = document.getElementById('volume');

// Play & pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-lg"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-lg"></i>';
  }
}

 // Update mute/unmute icon
 const updateMuteIcon = () => console.log("update mute icon clicked");
    // if muted
    // show mute icon
    // if unmuted 
    // show unmuted icon



// Update progress & timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
const setVideoProgress = () => video.currentTime = (+progress.value * video.duration) / 100;


// Stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
}


// Unmute Video
const unmuteVideo = () => {
    console.log("unmute video")
    video.muted = false;
}

// Mute Video
const muteVideo = () => {
    console.log("mute video")
    video.muted = true;
}



// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

 // Mute/Unmute Icon
 mute.addEventListener('click', updateMuteIcon);

 // Mute/Unmute 
 unmute.addEventListener('click', unmuteVideo);
 mute.addEventListener('click', muteVideo);

 //volume

 volume.addEventListener('change', (e)=>{
   video.volume = e.currentTarget.value / 100;
 });
