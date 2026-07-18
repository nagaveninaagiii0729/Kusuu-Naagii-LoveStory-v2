/* =====================================
   KUSUU ❤️ NAAGII
   ANNIVERSARY JAVASCRIPT
===================================== */


// Continue button

const nextAnniversary =
document.getElementById("nextAnniversary");



if(nextAnniversary){


nextAnniversary.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"gallery.html";


},2000);



});


}





// Timeline reveal

const moments =
document.querySelectorAll(".moment");


moments.forEach((item,index)=>{


item.style.opacity="0";



setTimeout(()=>{


item.style.transition="1s";

item.style.opacity="1";


},index*1000);



});





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
(15+Math.random()*30)+"px";


heart.style.transition =
"7s linear";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform =
"translateY(-120vh)";


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},7000);



}


setInterval(createHeart,1000);





// Photo click memory

const photo =
document.querySelector(".date-photo img");


if(photo){


photo.addEventListener("click",()=>{


photo.style.transform =
"scale(1.2)";


setTimeout(()=>{


photo.style.transform =
"scale(1)";


},800);



});


}
