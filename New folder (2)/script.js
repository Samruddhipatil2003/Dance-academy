document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Contact form submission (mock)
  const form = document.getElementById("contact-form");
  const msgDiv = document.getElementById("form-response");
  form.addEventListener("submit", event => {
    event.preventDefault();
    msgDiv.textContent = "Thank you! Your message has been received.";
    msgDiv.style.color = "#d4a373";
    form.reset();
  });

  // Lightbox for gallery images
  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("img-overlay");
      overlay.innerHTML = `
        <img src="${img.src}" alt="${img.alt || ''}">
        <span class="close-btn">&times;</span>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".close-btn").addEventListener("click", () => {
        overlay.remove();
      });
      overlay.addEventListener("click", e => {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
    });
  });
});
