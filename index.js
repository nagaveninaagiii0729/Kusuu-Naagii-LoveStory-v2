/* ===================================
   KUSUU ❤️ NAAGII
   INDEX JAVASCRIPT
=================================== */


/* ===============================
      LOADER
================================ */


window.addEventListener("load",()=>{


const loader=document.querySelector(".loader");


setTimeout(()=>{


loader.style.opacity="0";


loader.style.transition="1.5s";


setTimeout(()=>{


loader.style.display="none";


},1500);



},3000);



});





/* ===============================
      FLOATING HEARTS
================================ */


const heartContainer=document.querySelector(".floating-hearts");


function createHeart(){


const heart=document.createElement("span");


const hearts=[
"❤️",
"💗",
"💖",
"💕",
"🤍"
];


heart.innerHTML=
hearts[
Math.floor(Math.random()*hearts.length)
];



heart.style.left=
Math.random()*100+"vw";



heart.style.fontSize=
(20+Math.random()*30)+"px";



heart.style.animationDuration=
(8+Math.random()*8)+"s";



heartContainer.appendChild(heart);



setTimeout(()=>{

heart.remove();

},15000);



}



setInterval(createHeart,1200);





/* ===============================
      MUSIC CONTROL
================================ */


const music=
document.getElementById("bgMusic");


const musicBtn=
document.getElementById("musicBtn");


let playing=false;



musicBtn.addEventListener("click",()=>{


if(!playing){


music.play();

musicBtn.innerHTML="🔊";

playing=true;


}

else{


music.pause();

musicBtn.innerHTML="🎵";

playing=false;


}



});






/* ===============================
      START JOURNEY
================================ */


const startBtn=
document.getElementById("startBtn");



startBtn.addEventListener("click",()=>{


document.body.style.transition=
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href=
"intro.html";


},2000);



});





/* ===============================
      TITLE PARALLAX
================================ */


const title=
document.querySelector("h1");



document.addEventListener(
"mousemove",
(e)=>{


let x=
(window.innerWidth/2-e.clientX)/40;


let y=
(window.innerHeight/2-e.clientY)/40;



title.style.transform=
`translate(${x}px,${y}px)`;



}

);





/* ===============================
      MOBILE TOUCH EFFECT
================================ */


document.addEventListener(
"touchstart",
()=>{


if(!playing){

music.play()
.catch(()=>{});

musicBtn.innerHTML="🔊";

playing=true;

}


},
{once:true}

);
