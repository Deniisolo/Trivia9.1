var contadorrespuestas = 0;
var cambiarpreguntas = false;
function Generalboton() {
  cambiarpreguntas = false;
  document.getElementById("question1").textContent =
    "¿En qué año se llevó a cabo la Revolución Francesa?";
    document.getElementById("answer1").textContent = "1776";
    document.getElementById("answer1.1").value = "1776";
    document.getElementById("answer2").textContent = "1789";
    document.getElementById("answer1.2").value = "1789";
    document.getElementById("answer3").textContent = "1804";
    document.getElementById("answer1.3").value = "1804";

    document.getElementById("question2").textContent =
      "¿Quién fue el autor de la obra literaria 'Cien años de soledad'?";
    document.getElementById("answer4").textContent = "Gabriel García Márquez";
    document.getElementById("answer4.1").value = "Gabriel García Márquez";
    document.getElementById("answer5").textContent = "Julio Cortázar";
    document.getElementById("answer5.2").value = "Julio Cortázar";
    document.getElementById("answer6").textContent = "Mario Vargas Llosa";
    document.getElementById("answer6.3").value = "Mario Vargas Llosa";

    document.getElementById("question3").textContent =
    "¿Cuál es la capital de Japón?";
  document.getElementById("answer7").textContent = "Seúl";
  document.getElementById("answer7.1").value = "Seúl ";
  document.getElementById("answer8").textContent = "Pekín";
  document.getElementById("answer8.2").value = "Pekín";
  document.getElementById("answer9").textContent = "Tokio";
  document.getElementById("answer9.3").value = "Tokio";
}

function Popboton() {
  cambiarpreguntas = true;
  document.getElementById("question1").textContent =
    "¿Quien es el Rey del Pop?";
  document.getElementById("answer1").textContent = "Michael Jackson";
  document.getElementById("answer1.1").value = "Michael Jackson";
  document.getElementById("answer2").textContent = "Freddie Mercury";
  document.getElementById("answer1.2").value = "Freddie Mercury";
  document.getElementById("answer3").textContent = "Daddy Yankee";
  document.getElementById("answer1.3").value = "Daddy Yankee";

  document.getElementById("question2").textContent =
    "¿Cuál es el nombre real de Lady Gaga?";
  document.getElementById("answer4").textContent = "Elizabeth Woolridge Grant";
  document.getElementById("answer4.1").value = "Elizabeth Woolridge Grant";
  document.getElementById("answer5").textContent = "Stefani Joanne Angelina Germanotta";
  document.getElementById("answer5.2").value = "Stefani Joanne Angelina Germanotta";
  document.getElementById("answer6").textContent = "Karly Marina Loaiza";
  document.getElementById("answer6.3").value = "Karly Marina Loaiza";

  document.getElementById("question3").textContent =
  "¿Cuál es la bebida favorita de Homer Simpson?";
document.getElementById("answer7").textContent = "Whisky";
document.getElementById("answer7.1").value = "Whisky ";
document.getElementById("answer8").textContent = "Cerveza";
document.getElementById("answer8.2").value = "Cerveza";
document.getElementById("answer9").textContent = "Vodka";
document.getElementById("answer9.3").value = "Vodka";

}

function starboton() {
  alert("Hola" + " " + document.getElementById("name-input").value);
  document.getElementById("preguntas1").style.display = "block";
  document.getElementById("start-form").style.display = "none";
  document.getElementById("final").style.display = "none";
  starCronometro();
  document.getElementById("cronometro").style.display = "grid";
}
function buttonnext() {
  verificar1();
}
function buttonnext2() {
  verificar2();
}
function buttonnext3() {
  verificar3();

  let respuestacorrectas;
  respuestacorrectas =
    "<h2> Respuestas  correctas: " + contadorrespuestas + "</h2>";
  document.getElementById("score").innerHTML = respuestacorrectas;
}
function volverInicio() {
  location.reload();
}

function verificar1() {
  if (cambiarpreguntas) {
    verificarRespuesta(
      "Michael Jackson",
      "Revolución",
      "mensajeRespuesta1",
      "preguntas2",
      "preguntas1",
      true
    );
  } else {
    verificarRespuesta(
      "1789",
      "Revolución",
      "mensajeRespuesta1",
      "preguntas2",
      "preguntas1",
      true
    );
  }
}

function verificar2() {
  if (cambiarpreguntas) {
    verificarRespuesta(
      "Stefani Joanne Angelina Germanotta",
      "autor",
      "mensajeRespuesta2",
      "preguntas3",
      "preguntas2",
      true
    );
  } else {
    verificarRespuesta(
      "Gabriel García Márquez",
      "autor",
      "mensajeRespuesta2",
      "preguntas3",
      "preguntas2",
      true
    );
  }
}

function verificar3() {
  if (cambiarpreguntas) {
    verificarRespuesta(
      "Cerveza",
      "capital",
      "mensajeRespuesta3",
      "final",
      "preguntas3",
      false
    );
  } else {
    verificarRespuesta(
      "Tokio",
      "capital",
      "mensajeRespuesta3",
      "final",
      "preguntas3",
      false
    );
  }
}

let intervalo;

function detenerCronometro() {
  clearInterval(intervalo);
}

function starCronometro() {
  let tiempoRestante = 10;
  const cronometroElemento = document.getElementById("cronometro");
  cronometroElemento.textContent = tiempoRestante;

  intervalo = setInterval(function () {
    if (tiempoRestante <= 0) {
      detenerCronometro();
      alert("¡Tiempo agotado!");
    } else {
      tiempoRestante--;
      cronometroElemento.textContent = tiempoRestante;
    }
  }, 1000);
}

function verificarRespuesta(
  respuestaCorrecta,
  name,
  responseId,
  show,
  hide,
  timer
) {
  const radios = document.getElementsByName(name);
  const mensajeRespuesta = document.getElementById(responseId);

  for (const radio of radios) {
    if (radio.checked) {
      if (radio.value === respuestaCorrecta) {
        mensajeRespuesta.textContent = "¡Correcto!";
        mensajeRespuesta.style.color = "white";
        mensajeRespuesta.style.fontSize = "50px";
        mensajeRespuesta.style.fontWeight = "bold";
        mensajeRespuesta.style.backgroundColor = "green";
        mensajeRespuesta.style.height = "100px";
        mensajeRespuesta.style.width = "250px";
        contadorrespuestas++;
        console.log(contadorrespuestas);
      } else {
        mensajeRespuesta.textContent = "Incorrecto";
        mensajeRespuesta.style.color = "white";
        mensajeRespuesta.style.fontSize = "50px";
        mensajeRespuesta.style.fontWeight = "bold";
        mensajeRespuesta.style.fontWeight = "bold";
        mensajeRespuesta.style.backgroundColor = "red";
        mensajeRespuesta.style.height = "100px";
        mensajeRespuesta.style.width = "250px";
      }
      break;
    }
  }
  detenerCronometro();
  let waitasecond = setInterval(function () {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
    if (timer === true) {
      document.getElementById("cronometro").style.display = "grid";
      starCronometro();
    } else {
      document.getElementById("cronometro").style.display = "none";
    }
    clearInterval(waitasecond);
  }, 1000);
}
appearance: none;