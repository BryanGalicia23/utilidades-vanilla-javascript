import scrollTopButton from "./dom/boton_scroll.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode");
  digitalClock("#date", "#hour", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "./assets/WithoutMeEminem.mp3",
    "#activar-alarma",
    "#desactivar-alarma",
    "#isSound"
  );
});
