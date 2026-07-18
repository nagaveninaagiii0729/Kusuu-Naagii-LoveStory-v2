/* =====================================
   KUSUU ❤️ NAAGII
   LOADING INTRO JAVASCRIPT
===================================== */


// Open main story after intro

setTimeout(()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"index.html";


},2000);



},4000);







// Floating hearts

function createIntroHeart(){


const heart =
document.createElement("div");


heart.innerHTML =
"❤️";


heart.style.position =
"fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom =
"-20px";


heart.style.fontSize =
(20+Math.random()*30)+"px";


heart.style.transition =
"6s linear";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform =
"translateY(-120vh)";


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},6000);



}


setInterval(createIntroHeart,700);
