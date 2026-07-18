/* =====================================
   KUSUU ❤️ NAAGII
   CLASSROOM JAVASCRIPT
===================================== */


// Smooth scene reveal

const scenes = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


},{
threshold:0.4
});



scenes.forEach(scene=>{

observer.observe(scene);

});





// Create floating dust particles

function createDust(){


const dust=document.createElement("span");


dust.innerHTML="✦";


dust.style.position="fixed";

dust.style.left=Math.random()*100+"vw";

dust.style.top="100vh";

dust.style.color="rgba(255,255,255,0.5)";

dust.style.fontSize=
(5+Math.random()*15)+"px";


dust.style.transition="8s linear";


document.body.appendChild(dust);



setTimeout(()=>{


dust.style.transform=
"translateY(-120vh)";


dust.style.opacity="0";


},100);



setTimeout(()=>{


dust.remove();


},8000);



}



setInterval(createDust,500);





// Continue button

const nextButton =
document.getElementById("nextChapter");



if(nextButton){


nextButton.addEventListener("click",()=>{


document.body.style.transition="opacity 2s";

document.body.style.opacity="0";



setTimeout(()=>{


window.location.href="confession.html";


},2000);



});


}





// Character slight movement

const characters =
document.querySelectorAll(
".girl-character img, .boy-character img"
);



characters.forEach(character=>{


character.addEventListener("mouseenter",()=>{


character.style.transform="scale(1.08)";


});



character.addEventListener("mouseleave",()=>{


character.style.transform="scale(1)";


});


});





// Cinematic camera effect

document.addEventListener("mousemove",(e)=>{


const x =
(e.clientX-window.innerWidth/2)/80;


const y =
(e.clientY-window.innerHeight/2)/80;



document.querySelector(".classroom-bg").style.transform =
`translate(${x}px,${y}px)`;



});
