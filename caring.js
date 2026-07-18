/* =====================================
   KUSUU ❤️ NAAGII
   CARING JAVASCRIPT
===================================== */


// Continue button

const nextButton =
document.getElementById("nextCare");


if(nextButton){


nextButton.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"birthday.html";


},2000);



});


}





// Floating hearts

function createLove(){


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
(15+Math.random()*25)+"px";


heart.style.opacity =
"0.8";


heart.style.transition =
"6s linear";


document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform =
"translateY(-120vh)";


heart.style.opacity =
"0";


},100);



setTimeout(()=>{


heart.remove();


},6000);



}



setInterval(createLove,1200);





// Gift click surprise

const gift =
document.querySelector(".gift");



if(gift){


gift.addEventListener("click",()=>{


gift.style.transform =
"scale(1.2)";


gift.innerHTML +=
"<p>🥜 The smallest gift became the sweetest memory ❤️</p>";



});


}





// Image reveal animation

const images =
document.querySelectorAll("img");



images.forEach(img=>{


img.addEventListener("mouseenter",()=>{


img.style.transform =
"scale(1.1)";


});



img.addEventListener("mouseleave",()=>{


img.style.transform =
"scale(1)";


});


});
