/* Custom JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add current year to copyright if needed
  const currentYear = new Date().getFullYear();
  const copyrightEl = document.querySelector('.footer__copyright');
  if (copyrightEl && !copyrightEl.textContent.includes(currentYear.toString())) {
    copyrightEl.textContent = copyrightEl.textContent.replace(/\d{4}/, currentYear);
  }
}); 