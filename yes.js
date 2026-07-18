/* =====================================
   KUSUU ❤️ NAAGII
   YES CHAPTER JAVASCRIPT
===================================== */


// Continue button

const nextYes =
document.getElementById("nextYes");



if(nextYes){


nextYes.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"holdinghands.html";


},2000);



});


}





// Create floating hearts

function createHeart(){


const heart =
document.createElement("span");


heart.innerHTML="❤️";


heart.style.position="fixed";


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


setInterval(createHeart,700);





// YES word sparkle

const yes =
document.querySelector(".love-answer h2");



if(yes){


setInterval(()=>{


yes.style.textShadow =
"0 0 70px #ffb6d5";


setTimeout(()=>{


yes.style.textShadow =
"0 0 40px pink";


},800);



},2000);



}
