/* =====================================
   KUSUU ❤️ NAAGII
   MEMORIES JAVASCRIPT
===================================== */


// Card reveal animation

const cards =
document.querySelectorAll(".card");


cards.forEach((card,index)=>{


card.style.opacity="0";

card.style.transform +=
" translateY(50px)";



setTimeout(()=>{


card.style.transition="1s";


card.style.opacity="1";


card.style.transform =
"translateY(0) rotate(-3deg)";


},index*800);



});





// Continue button

const nextMemories =
document.getElementById("nextMemories");



if(nextMemories){


nextMemories.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"songs.html";


},2000);



});


}





// Floating hearts

function createMemoryHeart(){


const heart =
document.createElement("span");


heart.innerHTML =
["❤️","💕","💗","✨"][Math.floor(Math.random()*4)];


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


setInterval(createMemoryHeart,700);





// Card click surprise

cards.forEach(card=>{


card.addEventListener("click",()=>{


card.style.transform =
"scale(1.15)";


setTimeout(()=>{


card.style.transform =
"scale(1)";


},500);



});


});
