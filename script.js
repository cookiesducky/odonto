
document.getElementById("ano").textContent = new Date().getFullYear();
 
// Destaca no menu a seção que está visível na tela
const links = document.querySelectorAll("nav a");
const secoes = [...links].map(a => document.querySelector(a.getAttribute("href")));
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => {
        a.style.color = a.getAttribute("href") === "#" + e.target.id ? "var(--ink)" : "";
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
secoes.forEach(s => s && obs.observe(s));
 
