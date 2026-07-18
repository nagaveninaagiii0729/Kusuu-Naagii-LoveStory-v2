/* =====================================
   KUSUU ❤️ NAAGII
   GALLERY JAVASCRIPT
===================================== */


// Photo reveal animation

const photos =
document.querySelectorAll(".photo-card");



photos.forEach((photo,index)=>{


photo.style.opacity="0";

photo.style.transform +=
" translateY(80px)";



setTimeout(()=>{


photo.style.transition="1.2s";


photo.style.opacity="1";


photo.style.transform =
"translateY(0) rotate(-5deg)";


},index*500);



});







// Continue button

const nextGallery =
document.getElementById("nextGallery");



if(nextGallery){


nextGallery.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"letter.html";


},2000);



});


}







// Click photo zoom

photos.forEach(photo=>{


photo.addEventListener("click",()=>{


photo.classList.toggle("active");


});


});







// Floating hearts

function createGalleryHeart(){


const heart =
document.createElement("div");


heart.innerHTML =
["❤️","💕","✨"][Math.floor(Math.random()*3)];



heart.style.position =
"fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="-30px";


heart.style.fontSize =
(15+Math.random()*30)+"px";


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



setInterval(createGalleryHeart,900);
