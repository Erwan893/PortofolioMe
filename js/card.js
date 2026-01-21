const card = document.getElementById("idCard");

card.addEventListener("mousemove", (e) => {
  const r = card.getBoundingClientRect();
  card.style.transform = `
    rotateX(${(e.clientY - r.top - r.height / 2) / 20}deg)
    rotateY(${(e.clientX - r.left - r.width / 2) / -20}deg)
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0) rotateY(0)";
});
