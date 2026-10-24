(() => {
 const toggle=document.querySelector(".hamb"), nav=document.querySelector("nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));nav.classList.toggle("open",open);toggle.textContent=open?"×":"☰";});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰";}));}
 const items=document.querySelectorAll(".reveal");
 if("IntersectionObserver"in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target);}}),{threshold:.12});items.forEach(el=>io.observe(el));}else items.forEach(el=>el.classList.add("visible"));
 document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");document.querySelectorAll(".brandcard").forEach(card=>card.hidden=btn.dataset.filter!=="all"&&card.dataset.cat!==btn.dataset.filter);}));
 const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
})();