import scrollTopButton from "./dom/boton_scroll.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
  digitalClock("#date", "#hour", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "./assets/WithoutMeEminem.mp3",
    "#activar-alarma",
    "#desactivar-alarma",
    "#isSound"
  );
});
