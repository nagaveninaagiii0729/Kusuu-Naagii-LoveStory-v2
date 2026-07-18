/* =====================================
   KUSUU ❤️ NAAGII
   FIRST PHOTO JAVASCRIPT
===================================== */


// Camera flash effect

const flash =
document.querySelector(".camera-flash");


setTimeout(()=>{

if(flash){

flash.style.opacity="1";


setTimeout(()=>{

flash.style.opacity="0";


},300);

}

},2500);





// Photo zoom effect

const photo =
document.querySelector(".polaroid");



if(photo){


photo.addEventListener("mouseenter",()=>{


photo.style.transform =
"scale(1.08) rotate(0deg)";


});



photo.addEventListener("mouseleave",()=>{


photo.style.transform =
"scale(1) rotate(-5deg)";


});


}





// Continue button

const nextPhoto =
document.getElementById("nextPhoto");



if(nextPhoto){


nextPhoto.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"yes.html";


},2000);



});


}





// Floating camera sparkles

function createSparkle(){


const sparkle =
document.createElement("div");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";


sparkle.style.left =
Math.random()*100+"vw";


sparkle.style.top =
Math.random()*100+"vh";


sparkle.style.fontSize =
(10+Math.random()*25)+"px";


sparkle.style.transition =
"4s";


document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.style.transform =
"translateY(-80px)";


sparkle.style.opacity="0";


},100);



setTimeout(()=>{


sparkle.remove();


},4000);



}



setInterval(createSparkle,800);
