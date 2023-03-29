/*  Se puede seleccionar un elemento basado en un selector de CSS. 
Esto significa que puede seleccionar elementos por ID, clase o cualquier otro tipo de selector. 
Con el método getElementById, solo puede seleccionar un elemento por su ID. */

const color = document.getElementById("color"); // ejemplo 1 con querySelector
const salida = document.getElementById("salida"); // ejemplo 2 con getElementById
const numero = document.getElementById("numColores");

//se crea una variable para guardar el valor armacenado en localStorage
//const storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";

// funcion para setear el color a guardar
const setColor = () => {
  const seleccion = color.value;
  salida.innerHTML = seleccion;
  salida.style.background = seleccion;
};

//funcion para guardarlo en localStorage
const saveColor = () => {
  if (localStorage.getItem("colorValue") === null) {
    let storage = [];
    storage.push(color.value);
    localStorage.setItem("colorValue", JSON.stringify(storage));
  } else {
    let storage = JSON.parse(localStorage.getItem("colorValue"));
    storage.push(color.value);
    localStorage.setItem("colorValue", JSON.stringify(storage));
  }
  getColors();
};

function getColors() {
  let storage = JSON.parse(localStorage.getItem("colorValue"));
  let listaColores = document.getElementById("listaColores");
  numero.innerHTML = storage.length;
  listaColores.innerHTML = "";
  for (let index = 0; index < storage.length; index++) {
    let color = storage[index];
    listaColores.innerHTML += `<div class="lista border" style="background: ${color}">${color}</div>`;
  }
}

function deleteColor() {
  let storage = JSON.parse(localStorage.getItem("colorValue"));
  storage.pop();
  localStorage.setItem("colorValue", JSON.stringify(storage));
  getColors();
}

window.addEventListener("load", getColors);
setColor();
color.addEventListener("input", setColor);
