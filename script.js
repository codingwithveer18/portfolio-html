document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.querySelector(".about-button");
  const projectsButton = document.querySelector(".projects-button");
  const blogsButton = document.querySelector(".blogs-button");
  const contactButton = document.querySelector(".contact-button");
  const hamburgerButton = document.querySelector(".hamburger");
  const hamburgerOverlay = document.querySelector(".hamburger-overlay");
  const themeSwitch = document.querySelector(".theme-switch__checkbox");
  const backToTopButton = document.getElementById("backToTopBtn");
  const mobileNavLinks = document.querySelectorAll("#mobileNav a"); // Select all navigation links in mobile nav

  // Function to scroll to a specific section and close hamburger menu
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    closeHamburgerOverlay();
  }

  // Function to close the hamburger overlay
  function closeHamburgerOverlay() {
    hamburgerOverlay.classList.add("hidden");
    hamburgerButton.classList.remove("opened");
  }

  // Scroll to About Section when About button is clicked
  if (aboutButton) {
    aboutButton.addEventListener("click", function () {
      scrollToSection("about-section");
    });
  }

  // Scroll to Projects Section when Projects button is clicked
  if (projectsButton) {
    projectsButton.addEventListener("click", function () {
      scrollToSection("projects-section");
    });
  }

  // Scroll to Blogs Section when Blogs button is clicked
  if (blogsButton) {
    blogsButton.addEventListener("click", function () {
      scrollToSection("blogs-section");
    });
  }

  // Scroll to Contact Section when Contact button is clicked
  if (contactButton) {
    contactButton.addEventListener("click", function () {
      scrollToSection("contact-section");
    });
  }

  // Toggle hamburger overlay and icon
  if (hamburgerButton && hamburgerOverlay) {
    hamburgerButton.addEventListener("click", () => {
      hamburgerOverlay.classList.toggle("hidden");
      hamburgerButton.classList.toggle("opened");
    });
  }

  // Toggle theme
  if (themeSwitch) {
    themeSwitch.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });
  }

  // Show/hide back to top button
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    backToTopButton.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  // Close hamburger menu when a navigation link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeHamburgerOverlay();
    });
  });
});

// Typed.js Initialization (assuming you are already loading Typed.js)
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".auto-type", {
    strings: ["Software Developer", "Open Source Enthusiast", "Tech Blogger"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
});

// JavaScript for Hamburger Menu Toggle (assuming you have already set this up)
const hamburgerButton = document.getElementById("hamburgerButton");
const mobileNav = document.getElementById("mobileNav");

hamburgerButton.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden"); // Toggle the 'hidden' class
});
