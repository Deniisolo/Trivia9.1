function starboton(){
    alert("Bienvenida" + " " + document.getElementById("name-input").value)
    document.getElementById("preguntas1").style.display = 'block';
    document.getElementById("start-form").style.display = 'none';
    document.getElementById("final").style.display = 'none';
    starCronometro()
    document.getElementById("cronometro").style.display = "grid"
}
function buttonnext(){
    document.getElementById("preguntas2").style.display = 'block';
    document.getElementById("preguntas1").style.display = 'none';
    detenerCronometro()
    starCronometro()
    document.getElementById("cronometro").style.display = "grid"  
}
function buttonnext2(){
    document.getElementById("preguntas3").style.display = 'block';
    document.getElementById("preguntas2").style.display = 'none';
    detenerCronometro()
    starCronometro()
    document.getElementById("cronometro").style.display = "grid"
}
function buttonnext3(){
    document.getElementById("final").style.display = 'block';
    document.getElementById("preguntas3").style.display = 'none';
    detenerCronometro()
    document.getElementById("cronometro").style.display = "none"
}

function verificar1 (){

    verificarRespuesta("1789","Revolución","mensajeRespuesta1" )
}

function verificar2 (){
    verificarRespuesta("Gabriel García Márquez", "autor", "mensajeRespuesta2")
}

function verificar3 (){
    verificarRespuesta("Tokio", "capital", "mensajeRespuesta3")
}

let intervalo; 

function detenerCronometro() {
    clearInterval(intervalo);
}

function starCronometro() {
    let tiempoRestante = 10;
    const cronometroElemento = document.getElementById('cronometro');
    cronometroElemento.textContent = tiempoRestante;

    intervalo = setInterval(function () {
        if (tiempoRestante <= 0) {
            detenerCronometro(); 
            alert('¡Tiempo agotado!');
        } else {
            tiempoRestante--;
            cronometroElemento.textContent = tiempoRestante;
        }
    }, 1000);
}

function verificarRespuesta(respuestaCorrecta, name, responseId) {
    const radios = document.getElementsByName(name);
    const mensajeRespuesta = document.getElementById(responseId);

    for (const radio of radios) {
        if (radio.checked) {
            if (radio.value === respuestaCorrecta) {
                mensajeRespuesta.textContent = '¡Correcto!';
                mensajeRespuesta.style.color = 'green';
            } else {
                mensajeRespuesta.textContent = 'Incorrecto';
                mensajeRespuesta.style.color = 'red';
            }
            break;  
        }
    }
}

