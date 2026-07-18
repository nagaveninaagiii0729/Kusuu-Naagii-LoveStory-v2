/* =====================================
   KUSUU ❤️ NAAGII
   GLOBAL JAVASCRIPT EFFECTS
===================================== */



// Heart cursor effect


document.addEventListener("click",(e)=>{


const heart =
document.createElement("div");



heart.className =
"love-cursor";


heart.innerHTML =
"❤️";



heart.style.left =
e.clientX+"px";


heart.style.top =
e.clientY+"px";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},1000);



});







// Smooth page loading


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});







// Add current year automatically

const year =
document.querySelector(".current-year");



if(year){


year.innerHTML =
new Date().getFullYear();


}
