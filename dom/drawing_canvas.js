document.addEventListener("keydown", moveWithKey);
const d = document.getElementById("mi-lienzo");
const lienzo = d.getContext("2d");
const anchura = document.getElementById("select-width");
const colorcito = document.getElementById("select-color");

document.addEventListener("mouseup", soltarMouse);
d.addEventListener("mousedown", presionarMouse);
d.addEventListener("mousemove", dibujarMouse);

d.addEventListener("touchstart", presionarTouch);
d.addEventListener("touchend", soltarTouch);
d.addEventListener("touchmove", dibujarTouch);

anchura.addEventListener("click", cambiarGrosor);
colorcito.addEventListener("click", cambiarColor);

const teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
let cx = 150;
let cy = 150;
let myColor = colorcito.value;
let movimiento = 4;
let grosor = anchura.value;
let isClick = false;
let isTouch = false;

dibujarTeclado(myColor, cx - 1, cy, cx + 1, cy);

function moveWithKey(e) {
  switch (e.keyCode) {
    case teclas.LEFT:
      dibujarTeclado(myColor, cx, cy, cx - movimiento, cy);
      cx -= movimiento;
      break;
    case teclas.UP:
      dibujarTeclado(myColor, cx, cy, cx, cy - movimiento);
      cy -= movimiento;
      break;
    case teclas.RIGHT:
      dibujarTeclado(myColor, cx, cy, cx + movimiento, cy);
      cx += movimiento;
      break;
    case teclas.DOWN:
      dibujarTeclado(myColor, cx, cy, cx, cy + movimiento);
      cy += movimiento;
      break;

    default:
      break;
  }
}

function dibujarTeclado(color, x_ini, y_ini, x_fin, y_fin) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(x_ini, y_ini);
  lienzo.lineTo(x_fin, y_fin);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(e) {
  if (isClick) {
    dibujarTeclado(myColor, cx, cy, e.layerX, e.layerY);
    cx = e.layerX;
    cy = e.layerY;
  }
}

function presionarMouse(e) {
  isClick = true;
  cx = e.layerX;
  cy = e.layerY;
}

function soltarMouse(e) {
  isClick = false;
  cx = e.layerX;
  cy = e.layerY;
}

function cambiarGrosor(e) {
  grosor = anchura.value;
}

function cambiarColor() {
  myColor = colorcito.value;
}

function dibujarTouch(e) {
  //console.log(e);
  if (isTouch) {
    dibujarTeclado(
      myColor,
      cx,
      cy,
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    );
    cx = e.changedTouches[0].clientX;
    cy = e.changedTouches[0].clientY;
  }
}

function presionarTouch(e) {
  isTouch = true;
  cx = e.changedTouches[0].clientX;
  cy = e.changedTouches[0].clientY;
}

function soltarTouch(e) {
  isTouch = false;
  cx = e.changedTouches[0].clientX;
  cy = e.changedTouches[0].clientY;
}
