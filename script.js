// Navigation and slides logic
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const navButtons = document.querySelectorAll(".nav-btn");
  const locationButtons = document.querySelectorAll(".location-btn");

  function showSlide(id) {
    slides.forEach(slide => {
      slide.classList.toggle("active", slide.id === id);
    });

    // Update nav active button
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.target === id);
    });
  }

  // Navbar clicks
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showSlide(btn.dataset.target);
    });
  });

  // Location buttons clicks
  locationButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showSlide(btn.dataset.target);
      // Scroll top on slide switch
      const activeSlide = document.getElementById(btn.dataset.target);
      if (activeSlide) activeSlide.scrollTop = 0;
    });
  });

  // Initialize home slide
  showSlide("home");
});