/* =====================================
   KUSUU ❤️ NAAGII
   PROPOSAL JAVASCRIPT
===================================== */


// Ring surprise

const ringBox =
document.getElementById("ringBox");


const ring =
document.querySelector(".ring");



if(ringBox){


ringBox.addEventListener("click",()=>{


ring.style.transform =
"scale(1.5)";


ringBox.innerHTML +=
`
<p class="special">
"Will you stay with me forever?" ❤️
</p>
`;



});


}





// Continue button

const nextProposal =
document.getElementById("nextProposal");



if(nextProposal){


nextProposal.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"firstkiss.html";


},2000);



});


}





// Falling stars

function createStar(){


const star =
document.createElement("span");


star.innerHTML="✨";


star.style.position="fixed";


star.style.left =
Math.random()*100+"vw";


star.style.top="-20px";


star.style.fontSize =
(10+Math.random()*20)+"px";


star.style.transition =
"6s linear";


document.body.appendChild(star);



setTimeout(()=>{


star.style.transform =
"translateY(110vh)";


star.style.opacity="0";


},100);



setTimeout(()=>{


star.remove();


},6000);



}


setInterval(createStar,900);





// Mouse glow

document.addEventListener("mousemove",(e)=>{


const scene =
document.querySelector(".proposal-scene");


if(scene){


scene.style.transform =

`
translate(
${(e.clientX-window.innerWidth/2)/80}px,
${(e.clientY-window.innerHeight/2)/80}px
)
`;

}


});
