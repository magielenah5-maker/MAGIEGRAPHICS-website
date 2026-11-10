const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();

const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+"%";},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filters=[...document.querySelectorAll(".filter")];
const cards=[...document.querySelectorAll(".work-card")];
function applyFilter(category){filters.forEach(b=>b.classList.toggle("active",b.dataset.filter===category));cards.forEach(c=>c.classList.toggle("is-hidden",category!=="all"&&c.dataset.category!==category));}
filters.forEach(b=>b.addEventListener("click",()=>applyFilter(b.dataset.filter)));
document.querySelectorAll("[data-jump-filter]").forEach(link=>link.addEventListener("click",()=>applyFilter(link.dataset.jumpFilter)));

const lightbox=document.querySelector(".lightbox"), image=lightbox.querySelector("img");
const type=lightbox.querySelector("small"), title=lightbox.querySelector("h3"), description=lightbox.querySelector("p");
let current=0;
function visibleCards(){return cards.filter(c=>!c.classList.contains("is-hidden"));}
function showCard(index){const list=visibleCards();current=(index+list.length)%list.length;const card=list[current];image.src=card.querySelector("img").src;image.alt=card.querySelector("img").alt;type.textContent=card.dataset.type;title.textContent=card.dataset.title;description.textContent=card.dataset.description;}
function openCard(card){current=visibleCards().indexOf(card);showCard(current);lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeCard(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");document.body.style.overflow="";}
cards.forEach(c=>c.addEventListener("click",()=>openCard(c)));
lightbox.querySelector(".lightbox-close").addEventListener("click",closeCard);
lightbox.querySelector(".lightbox-prev").addEventListener("click",()=>showCard(current-1));
lightbox.querySelector(".lightbox-next").addEventListener("click",()=>showCard(current+1));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeCard();});
document.addEventListener("keydown",e=>{if(!lightbox.classList.contains("open"))return;if(e.key==="Escape")closeCard();if(e.key==="ArrowLeft")showCard(current-1);if(e.key==="ArrowRight")showCard(current+1);});
