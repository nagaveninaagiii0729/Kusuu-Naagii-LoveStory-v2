/* =====================================
   KUSUU ❤️ NAAGII
   FUTURE JAVASCRIPT
===================================== */


// Continue to final chapter

const nextFuture =
document.getElementById("nextFuture");



if(nextFuture){


nextFuture.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"forever.html";


},2000);



});


}







// Floating forever hearts

function createForeverHeart(){


const heart =
document.createElement("div");


heart.innerHTML =
["❤️","💖","✨","∞"][Math.floor(Math.random()*4)];



heart.style.position="fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize =
(20+Math.random()*30)+"px";


heart.style.transition =
"8s linear";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform =
"translateY(-120vh)";


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},8000);



}



setInterval(createForeverHeart,800);







// Dream card interaction

const dreams =
document.querySelectorAll(".dream");



dreams.forEach(card=>{


card.addEventListener("click",()=>{


card.style.transform =
"scale(1.15)";



setTimeout(()=>{


card.style.transform =
"scale(1)";


},700);



});


});
