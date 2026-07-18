/* =====================================
   KUSUU ❤️ NAAGII
   VIDEO MEMORY JAVASCRIPT
===================================== */


// Back to story button

const backStory =
document.getElementById("backStory");



if(backStory){


backStory.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"forever.html";


},2000);



});


}







// Video reveal animation

const videos =
document.querySelectorAll(".video-box");



videos.forEach((video,index)=>{


video.style.opacity="0";


setTimeout(()=>{


video.style.transition="1.5s";


video.style.opacity="1";


},index*700);



});







// Auto pause other videos

const players =
document.querySelectorAll("video");



players.forEach(player=>{


player.addEventListener("play",()=>{


players.forEach(other=>{


if(other !== player){

other.pause();

}


});


});


});
