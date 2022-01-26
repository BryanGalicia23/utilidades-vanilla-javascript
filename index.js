import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#hour", "#activar-reloj", "#desactivar-reloj");
});
