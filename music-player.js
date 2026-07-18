/* =====================================
   KUSUU ❤️ NAAGII
   MUSIC PLAYER JAVASCRIPT
===================================== */


const music =
document.getElementById("music");


const play =
document.getElementById("play");


const pause =
document.getElementById("pause");


const next =
document.getElementById("next");


const songName =
document.getElementById("songName");





let songs = [

{
name:"Naa Kayuthiruve",
file:"music/naa-kayuthiruve.mp3"
},


{
name:"Anumanave Illaa",
file:"music/anumanave-illaa.mp3"
}

];



let current = 0;







// Play

play.addEventListener("click",()=>{


music.play();


});






// Pause

pause.addEventListener("click",()=>{


music.pause();


});








// Next song

next.addEventListener("click",()=>{


current++;



if(current >= songs.length){

current=0;

}



music.src =
songs[current].file;


songName.innerHTML =
songs[current].name;



music.play();



});








// Auto start when allowed

window.addEventListener("load",()=>{


music.volume=0.5;



});
