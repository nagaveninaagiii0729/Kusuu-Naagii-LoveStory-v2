/* =====================================
   KUSUU ❤️ NAAGII
   HOLDING HANDS JAVASCRIPT
===================================== */


// Continue button

const nextHands =
document.getElementById("nextHands");



if(nextHands){


nextHands.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"proposal.html";


},2000);



});


}





// Floating rose petals

function createPetal(){


const petal =
document.createElement("div");


petal.innerHTML="🌸";


petal.style.position="fixed";


petal.style.left =
Math.random()*100+"vw";


petal.style.top="-20px";


petal.style.fontSize =
(15+Math.random()*20)+"px";


petal.style.transition =
"7s linear";


document.body.appendChild(petal);



setTimeout(()=>{


petal.style.transform =
"translateY(110vh) rotate(360deg)";


petal.style.opacity="0";


},100);



setTimeout(()=>{


petal.remove();


},7000);



}


setInterval(createPetal,800);





// Hand glow effect

const handImage =
document.querySelector(".couple img");



if(handImage){


setInterval(()=>{


handImage.style.filter =
"drop-shadow(0 0 60px pink)";


setTimeout(()=>{


handImage.style.filter =
"drop-shadow(0 0 40px pink)";


},1000);



},2500);



}





// Gift click surprise

const gifts =
document.querySelectorAll(
".rose,.chocolate"
);



gifts.forEach(gift=>{


gift.addEventListener("click",()=>{


gift.style.transform =
"scale(1.4)";


setTimeout(()=>{


gift.style.transform =
"scale(1)";


},500);



});


});
