/* ===================================
   KUSUU ❤️ NAAGII
   INTRO JAVASCRIPT
=================================== */


const music = document.getElementById("introMusic");


let musicStarted = false;



// Start music after first interaction

document.addEventListener("click",()=>{


if(!musicStarted){

    music.play().catch(()=>{});

    music.volume = 0.35;

    musicStarted=true;

}


});





// Enter Story Button

const enterBtn =
document.getElementById("enterStory");



enterBtn.addEventListener("click",()=>{


document.body.style.transition="2s";

document.body.style.opacity="0";



setTimeout(()=>{


window.location.href="classroom.html";


},2000);



});





// Floating particles

function createSparkle(){


const sparkle=document.createElement("div");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=
Math.random()*100+"vw";


sparkle.style.top=
Math.random()*100+"vh";


sparkle.style.fontSize=
(10+Math.random()*25)+"px";


sparkle.style.opacity="0.8";


sparkle.style.animation=
"fadeSparkle 4s forwards";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},4000);


}


setInterval(createSparkle,700);
