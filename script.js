const skills = [
  ["</>", "Programming", ["Python"]],
  ["🗄", "Database", ["SQL"]],
  ["📊", "Data Analysis", ["NumPy", "Pandas", "Matplotlib", "Seaborn"]],
  ["🧠", "AI & Machine Learning", ["Scikit-learn", "NLP", "Deep Learning", "TensorFlow", "Keras"]],
  ["🔧", "Tools", ["VS Code", "Jupyter Notebook", "Google Colab", "Git", "GitHub", "Kaggle"]],
  ["👥", "Professional Skills", ["Technical Mentoring", "AI/ML Teaching", "Python & Data Science Teaching"]],
];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
document.getElementById("skillGrid").innerHTML = skills
  .map(([i, t, items]) => `<div class="card skill reveal"><div class="skill-head"><span class="ico">${esc(i)}</span><h3>${esc(t)}</h3></div><div class="chips">${items.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div></div>`)
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const btn = document.getElementById("menuBtn");
const links = document.getElementById("links");
btn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  links.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
}));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
