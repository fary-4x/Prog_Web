// FARINEL ROSA REYES {2021-1042} 
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;

  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  matricula = document.getElementById("matricula").value;
  telefono = document.getElementById("telefono").value;
  correo = document.getElementById("correo").value;

  regExNombre = /[a-zÀ-ÿ\s]{2,20}/i
  regExApellido = /[a-zÀ-ÿ\s]{2,20}/i
  regExMatricula = /\d{4}-\d{4}/
  regExTelefono = /\(\d{3}\)-\d{3}-\d{4}/
  regExCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  if (!regExNombre.test(nombre)) {
    condicion = false;
    mostrarMensajeError("nombre", "Nombre no valido*");
  }
  else if (!regExApellido.test(apellido)) {
    condicion = false;
    mostrarMensajeError("apellido", "Apellido no valido*");
  }
  else if (!regExMatricula.test(matricula)) {
    condicion = false;
    mostrarMensajeError("matricula", "Matricula no valida*");
  }
  else if (!regExTelefono.test(telefono)) {
    condicion = false;
    mostrarMensajeError("telefono", "Telefono no valido*");
  }
  else if (!regExCorreo.test(correo)) {
    condicion = false;
    mostrarMensajeError("correo", "Correo no valido*");
  }

  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {

  form.reset();
  form.lastElementChild.innerHTML = "Resgistrado Correctamente";

}
