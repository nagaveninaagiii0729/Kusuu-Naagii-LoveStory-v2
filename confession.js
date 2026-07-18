/* =====================================
   KUSUU ❤️ NAAGII
   CONFESSION JAVASCRIPT
===================================== */


// Message typing effect

const typing =
document.querySelector(".typing");


setTimeout(()=>{


if(typing){

typing.innerHTML =
"Kusuu is typing... ❤️";

}


},2000);





// Continue button

const continueBtn =
document.getElementById("continueBtn");



if(continueBtn){


continueBtn.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"caring.html";


},2000);



});


}





// Rain particles

function createRainDrop(){


const drop =
document.createElement("span");


drop.innerHTML="💧";


drop.style.position="fixed";

drop.style.left =
Math.random()*100+"vw";


drop.style.top="-20px";


drop.style.fontSize =
(10+Math.random()*15)+"px";


drop.style.opacity=".4";


drop.style.transition =
"5s linear";


document.body.appendChild(drop);



setTimeout(()=>{


drop.style.transform =
"translateY(110vh)";


},100);



setTimeout(()=>{


drop.remove();


},5000);


}


setInterval(createRainDrop,300);





// Phone glow effect

const phone =
document.querySelector(".phone");


document.addEventListener("mousemove",(e)=>{


if(phone){


let x =
(e.clientX-window.innerWidth/2)/40;


let y =
(e.clientY-window.innerHeight/2)/40;



phone.style.transform =
`translate(${x}px,${y}px)`;


}


});
