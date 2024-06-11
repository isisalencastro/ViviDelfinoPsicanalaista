const botaoMenu = document.querySelector('.btn-menu');
const navMobile = document.querySelector('.nav-mobile');

botaoMenu.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

function fecharMenu() {
    navMobile.classList.remove('active')
}

/* --------------------------------------------------------------------------------------------------------------------------- */




/* ----------------------------------------------------------------------------------------------------------------------------- */

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.onscroll = function() {
    var btn = document.getElementById('back-to-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = 'block';
    } 
};

/* -------------------------------------------------------------------------------------------------------------------------------------- */

const testimonials = [
  { text: "Só queria te agradecer, pois você vem me mostrando coisas que sozinha eu jamais conseguiria me dar conta. Obrigada!", author: "Sandra" },
  { text: "Sou muito grata por ter te conhecido no momento em que eu mais precisava e que achava que era o fim, mas era apenas o começo.", author: "Juliana" },
  { text: "Graças a Deus e as sessões de terapia com a Vivi, tenho tido uma visão diferente das situações e melhorei a confiança em mim.", author: "Bruna" },
  { text: "Passando só pra te agradecer, por aqui estou dando pequenos passos que estão fazendo a diferença, tudo graças a sua ajuda.", author: "Fernanda"},
  { text: "Depois de dias e dias chorando, hoje estou sorrindo em saber que a vida pode ser leve e podemos sim nos ver com mais amor  nos dar valor.", author: "Helena"}
];

let currentTestimonial = 0;

const testimonialElem = document.getElementById("testimonial");
const authorElem = document.getElementById("author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showTestimonial() {
  testimonialElem.innerText = testimonials[currentTestimonial].text;
  authorElem.innerText = testimonials[currentTestimonial].author;
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
  showTestimonial();
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
  showTestimonial();
}

prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);

showTestimonial();

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
