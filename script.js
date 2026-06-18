/* ==========================
   COUNTDOWN TIMER
========================== */

const weddingDate =
new Date("December 15, 2026 22:30:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance =
weddingDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds =
Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerHTML =
days;

document.getElementById("hours").innerHTML =
hours;

document.getElementById("minutes").innerHTML =
minutes;

document.getElementById("seconds").innerHTML =
seconds;

},1000);


/* ==========================
   LIGHT SNOW
========================== */

function createSnow(){

const snow =
document.createElement("div");

snow.innerHTML = "❄";

snow.style.position = "fixed";
snow.style.left =
Math.random()*100 + "vw";

snow.style.top = "-20px";

snow.style.color = "white";

snow.style.fontSize =
(Math.random()*10+8)+"px";

snow.style.opacity = ".7";

snow.style.pointerEvents = "none";

snow.style.zIndex = "2";

document.body.appendChild(snow);

let y = -20;

const speed =
Math.random()*2+1;

const move = setInterval(()=>{

y += speed;

snow.style.top = y+"px";

if(y > window.innerHeight){

snow.remove();

clearInterval(move);

}

},30);

}

setInterval(createSnow,200);
/* ==========================
   LIGHT FLOATING HEARTS
========================== */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "❤";

heart.style.position = "fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom = "-30px";

heart.style.color =
"rgba(255,105,180,.45)";

heart.style.fontSize =
(Math.random()*25+25) + "px";

heart.style.pointerEvents = "none";

heart.style.zIndex = "3";

document.body.appendChild(heart);

let pos = 0;

const float = setInterval(()=>{

pos += 2;

heart.style.transform =
`translateY(-${pos}px)`;

heart.style.opacity =
1 - (pos / 700);

if(pos > 700){

clearInterval(float);

heart.remove();

}

},30);

}

setInterval(createHeart,500);


/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery-card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

galleryImages.forEach((img)=>{

img.addEventListener("click",()=>{

lightbox.style.display = "flex";

lightboxImg.src = img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display = "none";

});

/* ==========================
   FADE IN ANIMATION
========================== */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document
.querySelectorAll(
".detail-card,.gallery-card,.box,.fade-up"
)
.forEach((el)=>{

observer.observe(el);

});


/* ==========================
   PAGE LOAD EFFECT
========================== */

window.addEventListener("load",()=>{

document.body.style.opacity = "1";

document.body.style.transition =
"opacity .8s ease";

});


/* ==========================
   SAFE ERROR HANDLING
========================== */

window.addEventListener("error",(e)=>{

console.log(
"Script Error:",
e.message
);

});


/* ==========================
   END OF SCRIPT
========================== */

console.log(
"Wedding website loaded successfully ❤️"
);

function createFlag(){

const flag =
document.createElement("div");

flag.className = "flag-emoji";

flag.innerHTML = "🏳️‍🌈";

flag.style.left =
Math.random()*100 + "vw";

flag.style.top = "-50px";

flag.style.fontSize =
(Math.random()*10+18)+"px";

document.body.appendChild(flag);

let y = -50;

const speed =
Math.random()*1.5 + 1;

const drift =
(Math.random()-0.5)*2;

const move = setInterval(()=>{

y += speed;

flag.style.top = y + "px";

flag.style.left =
(parseFloat(flag.style.left)+drift/10)+"vw";

if(y > window.innerHeight+50){

clearInterval(move);

flag.remove();

}

},30);

}

setInterval(createFlag,1500);

const timeCard = document.getElementById("timeCard");
const weddingAudio = document.getElementById("weddingAudio");

timeCard.addEventListener("click", () => {
    if (weddingAudio.paused) {
        weddingAudio.play();
    } else {
        weddingAudio.pause();
    }
});