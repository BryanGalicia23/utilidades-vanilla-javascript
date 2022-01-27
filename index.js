import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#date", "#hour", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg",
    "#activar-alarma",
    "#desactivar-alarma",
    "#isSound"
  );
});
