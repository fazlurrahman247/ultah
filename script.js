// Create elegant balloons
function createBalloons() {
  const gradients = [
    "linear-gradient(135deg, #e8d5f2 0%, #9b7bb8 100%)",
    "linear-gradient(135deg, #f5c6d0 0%, #c4658a 100%)",
    "linear-gradient(135deg, #e8d5f2 0%, #6b4c8a 100%)",
    "linear-gradient(135deg, #f5c6d0 0%, #9b7bb8 100%)",
    "linear-gradient(135deg, #d4b8e0 0%, #b8860b 100%)",
  ];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.background =
        gradients[Math.floor(Math.random() * gradients.length)];
      balloon.style.animationDuration = Math.random() * 6 + 12 + "s";
      balloon.style.animationDelay = Math.random() * 6 + "s";
      document.body.appendChild(balloon);
    }, i * 400);
  }
}

// Create confetti
function createConfetti() {
  const colors = [
    "#9b7bb8",
    "#c4658a",
    "#e8d5f2",
    "#b8860b",
    "#6b4c8a",
    "#f5c6d0",
  ];

  const main = document.getElementById("main");
  const container = main || document.body;

  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = Math.random() * 3 + 4 + "s";
      confetti.style.animationDelay = Math.random() * 6 + "s";
      confetti.style.width = Math.random() * 4 + 4 + "px";
      confetti.style.height = Math.random() * 8 + 8 + "px";
      container.appendChild(confetti);
    }, i * 80);
  }
}

// Create stars
function createStars() {
  const main = document.getElementById("main");
  const container = main || document.body;

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = Math.random() * 2 + 2 + "s";
      container.appendChild(star);
    }, i * 150);
  }
}

// Create glitter particles (replacing hearts)
function createGlitter() {
  const colors = ["#e8d5f2", "#c4658a", "#9b7bb8", "#f5c6d0", "#b8860b"];

  const main = document.getElementById("main");
  const container = main || document.body;

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const glitter = document.createElement("div");
      glitter.className = "glitter-float";
      glitter.style.left = Math.random() * 100 + "vw";
      glitter.style.top = "-10px";
      glitter.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      glitter.style.animationDuration = Math.random() * 3 + 3 + "s";
      glitter.style.animationDelay = Math.random() * 2 + "s";
      glitter.style.width = Math.random() * 3 + 2 + "px";
      glitter.style.height = glitter.style.width;
      container.appendChild(glitter);
    }, i * 100);
  }
}

// Typing effect for name
function typeName() {
  const name = "Nida    Fauziyah    Tausiyah";
  const nameElement = document.getElementById("name");

  if (!nameElement) return;

  for (let i = 0; i < name.length; i++) {
    setTimeout(() => {
      const span = document.createElement("span");
      span.textContent = name[i];
      span.style.transitionDelay = i * 0.06 + "s";
      nameElement.appendChild(span);

      setTimeout(() => {
        span.classList.add("show");
      }, 50);
    }, i * 70);
  }

  setTimeout(
    () => {
      nameElement.classList.add("reveal");
    },
    name.length * 70 + 500,
  );
}

// Toggle quiz answer
function toggleQuiz(card) {
  card.classList.toggle("active");
}

// Make a wish function
function makeWish() {
  const wishMessage = document.getElementById("wishMessage");
  const messages = [
    "✨ Semoga semua keinginanmu terkabul! ✨",
    "🌟 Kamu pasti bisa masuk PTN! 🌟",
    "💖 Selamat ulang tahun! 💖",
    "🎂 Selamat! Selamat! Selamat! 🎂",
    "🎉 Harapan terbaik untukmu! 🎉",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  wishMessage.textContent = randomMessage;
  wishMessage.classList.remove("show");

  // Trigger animation
  setTimeout(() => {
    wishMessage.classList.add("show");
  }, 10);

  // Create special wish effect
  createWishEffect();
}

// Create wish celebration effect
function createWishEffect() {
  const colors = ["#e8d5f2", "#c4658a", "#9b7bb8", "#f5c6d0", "#ffd700"];

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.top = "50%";
      particle.style.width = Math.random() * 8 + 4 + "px";
      particle.style.height = particle.style.width;
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "9999";
      particle.style.animation = `wishParticle ${Math.random() * 1.5 + 1}s ease-out forwards`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2500);
    }, i * 50);
  }
}

// Add wish particle animation dynamically
const wishStyle = document.createElement("style");
wishStyle.textContent = `
  @keyframes wishParticle {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-300px) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(wishStyle);

// Create floating flowers
function createFloatingFlowers() {
  const flowers = ["🌸", "🌺", "🌻", "🌷", "💐", "🌹", "✨", "💖"];

  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const flower = document.createElement("div");
      flower.className = "floating-flower";
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.top = "100%";
      flower.style.animationDuration = Math.random() * 4 + 6 + "s";
      flower.style.animationDelay = Math.random() * 2 + "s";

      const main = document.getElementById("main");
      if (main) {
        main.appendChild(flower);
      }
    }, i * 600);
  }

  // Keep creating flowers periodically
  setInterval(() => {
    const main = document.getElementById("main");
    if (main && main.classList.contains("visible")) {
      const flower = document.createElement("div");
      flower.className = "floating-flower";
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.top = "100%";
      flower.style.animationDuration = Math.random() * 4 + 6 + "s";
      main.appendChild(flower);
    }
  }, 3000);
}

// Create floating cats
function createFloatingCats() {
  const cats = ["🐱", "😺", "😸", "😻", "😽", "🐈", "😼"];
  const main = document.getElementById("main");
  if (!main) return;

  // Create initial cats - reduced from 5 to 2
  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      const cat = document.createElement("div");
      cat.className = "floating-cat";
      cat.textContent = cats[Math.floor(Math.random() * cats.length)];
      cat.style.left = Math.random() * 80 + 10 + "%";
      cat.style.top = Math.random() * 30 + 20 + "%";
      cat.style.animationDuration = Math.random() * 6 + 10 + "s";
      cat.style.animationDelay = Math.random() * 3 + "s";
      main.appendChild(cat);
    }, i * 1500);
  }

  // Keep creating cats periodically - reduced from 5000ms to 15000ms
  setInterval(() => {
    const main = document.getElementById("main");
    if (main && main.classList.contains("visible")) {
      const cat = document.createElement("div");
      cat.className = "floating-cat";
      cat.textContent = cats[Math.floor(Math.random() * cats.length)];
      cat.style.left = Math.random() * 80 + 10 + "%";
      cat.style.top = Math.random() * 30 + 20 + "%";
      cat.style.animationDuration = Math.random() * 6 + 10 + "s";
      main.appendChild(cat);
    }
  }, 15000);
}

// Open gift function (for intro page)
function openGift() {
  // Redirect to content page
  window.location.href = "content.html";
}

// Stagger reveal helper
function staggerRevealElements(selectors, gap = 300) {
  selectors.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (el) setTimeout(() => el.classList.add("reveal"), i * gap + 200);
  });
}

// Parallax for decoration
function enableParallax() {
  const decor = document.querySelector(".main-decoration");
  if (!decor) return;
  window.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    decor.style.transform = `translate3d(${dx * 8}px, ${dy * 6}px, 0)`;
  });
}

// Initialize intro effects
function initIntro() {
  createBalloons();
  createConfetti();
  createStars();

  // Keep creating balloons while intro visible
  setInterval(() => {
    const intro = document.getElementById("intro");
    if (intro && !intro.classList.contains("hidden")) {
      const gradients = [
        "linear-gradient(135deg, #e8d5f2 0%, #9b7bb8 100%)",
        "linear-gradient(135deg, #f5c6d0 0%, #c4658a 100%)",
      ];
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.background =
        gradients[Math.floor(Math.random() * gradients.length)];
      balloon.style.animationDuration = Math.random() * 6 + 12 + "s";
      document.body.appendChild(balloon);
    }
  }, 5000);
}

// Initialize main content page
function initMainContent() {
  const main = document.getElementById("main");
  if (!main) return;

  // Add visible class to main
  main.classList.add("visible");

  // Add decorative orbs
  const decor = document.querySelector(".main-decoration");
  if (decor) {
    const orb1 = document.createElement("div");
    orb1.className = "decor-orb orb-1";
    const orb2 = document.createElement("div");
    orb2.className = "decor-orb orb-2";
    decor.appendChild(orb1);
    decor.appendChild(orb2);
  }

  // Reveal with staggered animation - single column layout
  setTimeout(() => typeName(), 300);

  const ageElement = document.getElementById("age");
  if (ageElement) {
    setTimeout(() => ageElement.classList.add("reveal"), 700);
  }

  const ageSubtitle = document.querySelector(".age-subtitle");
  if (ageSubtitle) {
    setTimeout(() => ageSubtitle.classList.add("show"), 1100);
  }

  // Stagger reveal main sections - brick grid layout
  staggerRevealElements([".cake-section", ".bricks-grid", "#penutup"], 300);

  // Reveal individual brick cards with more delay
  const brickCards = document.querySelectorAll(".brick-card");
  brickCards.forEach((card, i) => {
    setTimeout(
      () => {
        card.classList.add("reveal");
      },
      800 + i * 150,
    );
  });

  // Small extra confetti burst and glitter
  setTimeout(() => {
    createConfetti();
    createConfetti();
    createGlitter();
  }, 1200);

  // Shimmer section titles
  setTimeout(() => {
    document.querySelectorAll(".section-title span").forEach((el, idx) => {
      setTimeout(() => el.classList.add("shimmer"), idx * 150);
    });
  }, 1400);

  // Start floating flowers
  setTimeout(() => {
    createFloatingFlowers();
  }, 1500);

  // Start floating cats
  setTimeout(() => {
    createFloatingCats();
  }, 2000);

  // Play birthday music
  const audio = document.getElementById("birthdaySong");
  if (audio) {
    audio.volume = 0.32;
    audio.play().catch((e) => console.log("Audio autoplay blocked"));
  }

  // Enable parallax decoration subtle movement
  enableParallax();
}

// Show overlay if small screen and block mobile devices
function checkDesktop() {
  const overlay = document.getElementById("mobileOverlay");
  if (!overlay) return;

  // Check if it's a mobile device (screen width < 1000px)
  const isMobile = window.innerWidth < 1000;

  if (isMobile) {
    // Show the overlay
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");

    // Hide the main content if it exists
    const intro = document.getElementById("intro");
    const main = document.getElementById("main");
    if (intro) intro.style.display = "none";
    if (main) main.style.display = "none";
  } else {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
  }
}

// Check if it's a mobile device and show alert
function checkMobileAndAlert() {
  // Detect mobile device using user agent or screen width
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) || window.innerWidth < 1000;

  if (isMobile) {
    // Show alert
    alert(
      "⚠️ Maaf, halaman ini hanya bisa dibuka di PC/Laptop!\n\nSilakan buka menggunakan komputer atau laptop untuk pengalaman terbaik.",
    );

    // Show overlay to block content
    const overlay = document.getElementById("mobileOverlay");
    if (overlay) {
      overlay.classList.add("show");
      overlay.setAttribute("aria-hidden", "false");
    }

    // Hide intro/main content
    const intro = document.getElementById("intro");
    const main = document.getElementById("main");
    if (intro) intro.style.display = "none";
    if (main) main.style.display = "none";

    return true; // is mobile
  }
  return false; // not mobile
}

// Start when page loads
window.onload = function () {
  // Check for mobile and show alert first
  checkMobileAndAlert();

  // Check if we're on intro page or content page
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  if (intro) {
    initIntro();
  }

  if (main) {
    initMainContent();
  }

  checkDesktop();
};

window.addEventListener("resize", checkDesktop);
