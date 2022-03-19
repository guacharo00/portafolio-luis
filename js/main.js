// Validating Form
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const mensage = document.querySelector("#message");
const form = document.querySelector("form");
const err = document.querySelector(".err");

form.addEventListener("submit", (e) => {
  let message = [];
  if (nombre.value === "" || nombre.value === null) {
    message.push("El nombre es requerido");
  }

  if (email.value === "" || email.value === null) {
    message.push("El correo es requerido");
  }

  if (mensage.value === "" || mensage.value === null) {
    message.push("El Mensaje es requerido");
  }

  if (mensage.value.length < 10 && mensage.value.length > 2) {
    message.push("Seguro tienes algo mas que decir");
  }

  if (message.length > 0) {
    e.preventDefault();
    err.innerText = message.join(", ");
    err.style.opacity = 1;
  }
});

// Footer
const footerContainer = document.querySelector(".footer__container");
const fecha = new Date().getFullYear();

const paragraphHtml = `
    <p class="footer__contenido">
    Sitio creado a medida por <span>Luis Fructuoso</span>. &copy;Todos
    los derechos reservados <span>${fecha}</span>
    </p>
`;

footerContainer.innerHTML = paragraphHtml;
