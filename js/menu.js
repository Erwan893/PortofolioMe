const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("menuBackdrop");

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");
  backdrop.classList.toggle("opacity-0");
  backdrop.classList.toggle("pointer-events-none");
});

backdrop.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  backdrop.classList.add("opacity-0", "pointer-events-none");
});

document.querySelectorAll("#mobileMenu a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.add("translate-x-full");
    backdrop.classList.add("opacity-0", "pointer-events-none");
  })
);
