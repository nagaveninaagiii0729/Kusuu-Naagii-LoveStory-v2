/* =====================================
   KUSUU ❤️ NAAGII
   FOREVER FINAL JAVASCRIPT
===================================== */



// Replay story button

const replay =
document.getElementById("replay");



if(replay){


replay.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"index.html";


},2000);



});


}







// Floating hearts

function createHeart(){


const heart =
document.createElement("div");


heart.innerHTML =
["❤️","💖","💕","✨"][Math.floor(Math.random()*4)];



heart.style.position =
"fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom =
"-30px";


heart.style.fontSize =
(20+Math.random()*35)+"px";


heart.style.transition =
"8s linear";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform =
"translateY(-120vh) rotate(360deg)";


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},8000);



}



setInterval(createHeart,700);







// Final ring click surprise

const ring =
document.querySelector(".ring");



if(ring){


ring.addEventListener("click",()=>{


ring.innerHTML="💖";


ring.style.fontSize="160px";



setTimeout(()=>{


ring.innerHTML="💍";


ring.style.fontSize="130px";


},1500);



});


}
