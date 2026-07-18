/* =====================================
   KUSUU ❤️ NAAGII
   SONGS JAVASCRIPT
===================================== */


const buttons =
document.querySelectorAll(".playBtn");


const player =
document.getElementById("songPlayer");



buttons.forEach((button,index)=>{


button.addEventListener("click",()=>{


button.innerHTML="❤️ Playing Memory...";



button.style.transform=
"scale(1.1)";



setTimeout(()=>{


button.innerHTML="▶ Play Memory";


button.style.transform=
"scale(1)";


},3000);



});



});







// Continue button

const nextSongs =
document.getElementById("nextSongs");



if(nextSongs){


nextSongs.addEventListener("click",()=>{


document.body.style.transition=
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href=
"anniversary.html";


},2000);



});


}







// Floating music notes

function createNote(){


const note =
document.createElement("div");


note.innerHTML=
["🎵","🎶","❤️"][Math.floor(Math.random()*3)];



note.style.position="fixed";


note.style.left=
Math.random()*100+"vw";


note.style.bottom="-30px";


note.style.fontSize=
(20+Math.random()*25)+"px";


note.style.transition=
"6s linear";



document.body.appendChild(note);



setTimeout(()=>{


note.style.transform=
"translateY(-120vh)";


note.style.opacity="0";


},100);



setTimeout(()=>{


note.remove();


},6000);


}



setInterval(createNote,900);
