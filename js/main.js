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
