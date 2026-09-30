const menuButonu = document.getElementById("menuButonu");
const navMenu = document.getElementById("navMenu");

menuButonu.addEventListener("click", () => {
  navMenu.classList.toggle("aktif");
});

// Menü bağlantılarına tıklayınca menüyü kapat
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("aktif");
    }
  });
});
