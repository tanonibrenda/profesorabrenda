function loadVideo() {
    var videoContainer = document.querySelector('.video-container');
    var iframe = videoContainer.querySelector('iframe');
    iframe.src = "https://www.youtube.com/embed/yg8omLC2MKE";
    iframe.style.display = "block";
    videoContainer.querySelector('img').style.display = "none";
}


