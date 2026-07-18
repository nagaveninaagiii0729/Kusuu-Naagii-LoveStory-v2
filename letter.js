/* =====================================
   KUSUU ❤️ NAAGII
   LOVE LETTER JAVASCRIPT
===================================== */


const paper =
document.getElementById("letterPaper");



// Letter typing effect

if(paper){


paper.style.opacity="0";


setTimeout(()=>{


paper.style.opacity="1";


},1000);


}







// Continue button

const nextLetter =
document.getElementById("nextLetter");



if(nextLetter){


nextLetter.addEventListener("click",()=>{


document.body.style.transition =
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href =
"future.html";


},2000);



});


}







// Floating love symbols

function createLove(){


const item =
document.createElement("div");


item.innerHTML =
["❤️","💌","✨"][Math.floor(Math.random()*3)];



item.style.position="fixed";


item.style.left =
Math.random()*100+"vw";


item.style.bottom="-20px";


item.style.fontSize =
(15+Math.random()*25)+"px";


item.style.transition =
"7s linear";



document.body.appendChild(item);



setTimeout(()=>{


item.style.transform =
"translateY(-120vh)";


item.style.opacity="0";


},100);



setTimeout(()=>{


item.remove();


},7000);



}



setInterval(createLove,900);
