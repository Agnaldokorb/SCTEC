const contactForm = document.getElementById("contact-form");
const contactFeedback = document.getElementById("contact-feedback");

if (contactForm && contactFeedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactFeedback.textContent =
      "Mensagem enviada!. (Falta colocar um backend para isso funcionar de verdade)";
  });
}
