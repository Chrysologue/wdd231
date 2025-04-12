document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.about-section');

  const revealSection = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealSection);
  revealSection();
});
