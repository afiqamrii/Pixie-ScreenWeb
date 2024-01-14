// Get the video file from the URL parameters
var urlParams = new URLSearchParams(window.location.search);
var videoFile = urlParams.get('video');

// Get the video player
var videoPlayer = document.getElementById('videoPlayer');

// Set the source of the video player
videoPlayer.src = videoFile;
