// Menu hambúrguer toggle
const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');

hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling; // próxima div com a resposta

    // Alterna classe para mostrar ou esconder a resposta
    answer.classList.toggle('active');

    // Alterna o ícone + / -
    const icon = button.querySelector('.faq-icon');
    if (answer.classList.contains('active')) {
      icon.textContent = '−'; // menos
      answer.style.maxHeight = answer.scrollHeight + 'px'; // anima expandindo
    } else {
      icon.textContent = '+';
      answer.style.maxHeight = null; // anima recolhendo
    }
  });
});

// Fade-in animation ao scroll
function revealSections() {
  const sections = document.querySelectorAll('.section-animate');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
