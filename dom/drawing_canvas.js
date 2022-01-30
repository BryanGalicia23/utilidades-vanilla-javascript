document.addEventListener("keydown", moveWithKey);
const d = document.getElementById("mi-lienzo");
const lienzo = d.getContext("2d");
const anchura = document.getElementById("select-width");
const colorcito = document.getElementById("panel-colores");
const weightPincel = document.getElementById("weightPincel");
const colorPicker = document.getElementById("color-picker");
const cleanCanvas = document.getElementById("clean-canvas");
const saveCanvas = document.getElementById("save-canvas");

document.addEventListener("mouseup", soltarMouse);
d.addEventListener("mousedown", presionarMouse);
d.addEventListener("mousemove", dibujarMouse);

d.addEventListener("touchstart", presionarTouch);
d.addEventListener("touchend", soltarTouch);
d.addEventListener("touchmove", dibujarTouch);

colorcito.addEventListener("click", cambiarColor);
weightPincel.addEventListener("change", cambiarGrosor);
colorPicker.addEventListener("change", (e) => {
  myColor = colorPicker.value;
});
cleanCanvas.addEventListener("click", (e) => {
  lienzo.clearRect(0, 0, d.width, d.height);
});
saveCanvas.addEventListener("click", (e) => {
  let newCanvas = document.getElementById("mi-lienzo");
  let dataURL = newCanvas.toDataURL("image/jpeg", 1.0);
  downloadImage(dataURL, "ILoveDrawing.jpeg");
});

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
let grosor = 2;
let isClick = false;
let isTouch = false;

dibujarTeclado(myColor, cx - 1, cy, cx + 1, cy);

function moveWithKey(e) {
  switch (e.keyCode) {
    case teclas.LEFT:
      e.preventDefault();
      dibujarTeclado(myColor, cx, cy, cx - movimiento, cy);
      cx -= movimiento;
      break;
    case teclas.UP:
      e.preventDefault();
      dibujarTeclado(myColor, cx, cy, cx, cy - movimiento);
      cy -= movimiento;
      break;
    case teclas.RIGHT:
      e.preventDefault();
      dibujarTeclado(myColor, cx, cy, cx + movimiento, cy);
      cx += movimiento;
      break;
    case teclas.DOWN:
      e.preventDefault();
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
  grosor = weightPincel.value;
}

function cambiarColor(e) {
  //console.log(e.path[0].id);
  //myColor = colorcito.value;
  let opColor = e.path[0].id.toString();
  switch (opColor) {
    case "w-red":
      myColor = "rgb(255, 0, 0)";
      break;
    case "w-green":
      myColor = "rgb(0, 128, 0)";
      break;
    case "w-blue":
      myColor = "rgb(0, 0, 255)";
      break;
    case "w-yellow":
      myColor = "rgb(255, 255, 0)";
      break;
    case "w-orange":
      myColor = "rgb(255, 165, 0)";
      break;
    case "w-pink":
      myColor = "rgb(255, 192, 203)";
      break;
    case "w-purple":
      myColor = "rgb(128, 0, 128)";
      break;
    case "w-brown":
      myColor = "rgb(165, 42, 42)";
      break;
    case "w-aqua":
      myColor = "rgb(0, 255, 255)";
      break;
    case "w-springgreen":
      myColor = "rgb(0, 255, 127)";
      break;
    case "w-black":
      myColor = "rgb(0, 0, 0)";
      break;
    case "w-white":
      myColor = "rgb(255, 255, 255)";
      break;

    default:
      break;
  }
}

function presionarTouch(e) {
  //console.log(e);
  isTouch = true;

  currentPositionX = e.changedTouches[0].clientX;
  currentPositionY = e.changedTouches[0].clientY;
  cx = e.changedTouches[0].clientX;
  cy = e.changedTouches[0].clientY;
}

function soltarTouch(e) {
  isTouch = false;

  cx = e.changedTouches[0].clientX;
  cy = e.changedTouches[0].clientY;
}

function dibujarTouch(e) {
  if (isTouch) {
    e.preventDefault();
    dibujarTeclado(
      myColor,
      cx - 35,
      cy - e.changedTouches[0].clientY / 2,
      e.changedTouches[0].clientX - 35,
      e.changedTouches[0].clientY - e.changedTouches[0].clientY / 2
    );
    cx = e.changedTouches[0].clientX;
    cy = e.changedTouches[0].clientY;
  }
}

function downloadImage(data, filename = "untitled.jpeg") {
  var a = document.createElement("a");
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}
