const video = document.querySelector(".video__item");
const currentTime = document.querySelector(".currentTime");

function toggleVideoStatus(){
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}

video.addEventListener("click", toggleVideoStatus);

// Видео длится 1:14
function updateTime() {
    const minutes = String(Math.floor(video.currentTime / 60)).padStart(2, 0);
    const seconds = String(Math.floor(video.currentTime % 60)).padStart(2, 0);
    const ms = String(Math.floor((video.currentTime * 1000) % 1000)).padStart(3, 0);

    currentTime.innerHTML = `${minutes}:${seconds}:${ms}`
}

video.addEventListener("timeupdate", updateTime)

video.addEventListener("ended", function(){
    video.currentTime = 0;
})