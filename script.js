// Mobile burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true" || false;
  burger.setAttribute("aria-expanded", !expanded);
  navLinks.style.display = expanded ? "none" : "flex";
});

// Close menu when link clicked (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      navLinks.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
