const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/meeelvkp", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      popup.classList.remove("opacity-0", "pointer-events-none");
      form.reset();
    } else {
      alert("Failed to send message 😢");
    }
  } catch {
    alert("Network error 😵");
  }
});

closePopup.addEventListener("click", () => {
  popup.classList.add("opacity-0", "pointer-events-none");
});
