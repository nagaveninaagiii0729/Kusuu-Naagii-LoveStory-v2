/* =====================================
   KUSUU ❤️ NAAGII
   BIRTHDAY JAVASCRIPT
===================================== */


// Gift opening animation

const giftBox =
document.getElementById("giftBox");


const shirt =
document.querySelector(".shirt-reveal");



if(giftBox && shirt){


shirt.style.display="none";



giftBox.addEventListener("click",()=>{


giftBox.style.transform=
"scale(1.3) rotate(10deg)";


setTimeout(()=>{


giftBox.style.display="none";


shirt.style.display="block";


},800);



});



}





// Continue button

const nextBirthday =
document.getElementById("nextBirthday");



if(nextBirthday){


nextBirthday.addEventListener("click",()=>{


document.body.style.transition=
"opacity 2s";


document.body.style.opacity="0";



setTimeout(()=>{


window.location.href=
"firstphoto.html";


},2000);



});



}





// Floating balloons

function createBalloon(){


const balloon =
document.createElement("div");


balloon.innerHTML="🎈";


balloon.style.position="fixed";


balloon.style.left=
Math.random()*100+"vw";


balloon.style.bottom="-50px";


balloon.style.fontSize=
(25+Math.random()*30)+"px";


balloon.style.transition=
"8s linear";



document.body.appendChild(balloon);



setTimeout(()=>{


balloon.style.transform=
"translateY(-120vh)";


},100);



setTimeout(()=>{


balloon.remove();


},8000);



}



setInterval(createBalloon,1500);





// Birthday glow

const title =
document.querySelector(".birthday-scene h1");



if(title){


setInterval(()=>{


title.style.textShadow =
"0 0 40px pink";



setTimeout(()=>{


title.style.textShadow =
"none";


},700);



},2000);



}
