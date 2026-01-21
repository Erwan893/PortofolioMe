// Force scroll to top on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Fade animation
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.2 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".projectSwiper", {
    loop: true,
    spaceBetween: 12,
    grabCursor: true,
  });
});

// Project Image Preview
document.addEventListener("DOMContentLoaded", () => {
  const preview = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImage");
  const closeBtn = document.getElementById("closePreview");

  preview.classList.add("opacity-0", "pointer-events-none");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const swiper = card.querySelector(".swiper");
      const imgSrc =
        swiper.querySelector(".swiper-slide-active img")?.src ||
        swiper.dataset.preview;

      previewImg.src = imgSrc;
      preview.classList.remove("opacity-0", "pointer-events-none");
    });
  });

  closeBtn.addEventListener("click", () => {
    preview.classList.add("opacity-0", "pointer-events-none");
    previewImg.src = "";
  });

  preview.addEventListener("click", (e) => {
    if (e.target === preview) {
      preview.classList.add("opacity-0", "pointer-events-none");
      previewImg.src = "";
    }
  });
});
