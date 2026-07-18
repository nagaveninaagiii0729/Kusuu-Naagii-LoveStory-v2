/* =====================================
   KUSUU ❤️ NAAGII
   FIRST KISS JAVASCRIPT
===================================== */


// Continue button

const nextKiss =
document.getElementById("nextKiss");



if(nextKiss){


nextKiss.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"memories.html";


},2000);



});


}





// Floating hearts

function createHeart(){


const heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize =
(15+Math.random()*35)+"px";


heart.style.transition =
"7s linear";


document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform =
"translateY(-120vh) scale(1.5)";


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},7000);



}



setInterval(createHeart,1000);





// Heart click surprise

const heart =
document.querySelector(".heart-lock");



if(heart){


heart.addEventListener("click",()=>{


heart.innerHTML="💖";


heart.style.fontSize="130px";



setTimeout(()=>{


heart.innerHTML="❤️";


heart.style.fontSize="100px";


},1000);



});


}





// Mouse cinematic movement

document.addEventListener("mousemove",(e)=>{


const scene =
document.querySelector(".kiss-scene");



if(scene){


scene.style.transform =

`
translate(
${(e.clientX-window.innerWidth/2)/100}px,
${(e.clientY-window.innerHeight/2)/100}px
)
`;


}


});
