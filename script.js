// AUTO LOAD MAIN GALLERY IMAGES
const galleryGrid = document.getElementById("galleryGrid");

for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.src = `wed${i}.jpg`;
  galleryGrid.appendChild(img);
}

// AFTER CELEBRATION IMAGES (ADD LATER)
const afterGrid = document.getElementById("afterGrid");

// Example future images
const afterImages = ["after1.jpg", "after2.jpg", "after3.jpg"];

afterImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  afterGrid.appendChild(img);
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    lightbox.style.display = "flex";
    lightboxImg.src = e.target.src;
  }
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
};

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// AFTER CELEBRATION TOGGLE
const afterSection = document.getElementById("afterCelebration");

// 🔒 CHANGE THIS AFTER THE WEDDING
const showAfterCelebration = false;

if (showAfterCelebration) {
  afterSection.classList.remove("hidden");
}
