function starboton(){
    alert("Bienvenido")
    document.getElementById('cronometro').style.display = 'block';
    document.getElementById("preguntas1").style.display = 'block';
    document.getElementById("start-form").style.display = 'none';
    document.getElementById("final").style.display = 'none';
}
function buttonnext(){
    alert("buenaaa")
    document.getElementById("preguntas2").style.display = 'block';
    document.getElementById("preguntas1").style.display = 'none';
}
function buttonnext2(){
    alert("buenaaa 2")
    document.getElementById("preguntas3").style.display = 'block';
    document.getElementById("preguntas2").style.display = 'none';
}
function buttonnext3(){
    alert("buenaaa 3")
    document.getElementById("final").style.display = 'block';
    document.getElementById("preguntas3").style.display = 'none';
}

function starCronometro() {
    let tiempoRestante = 10; 
    const cronometroElemento = document.getElementById('cronometro');
    const intervalo = setInterval(function () {
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            alert('¡Tiempo agotado!');
        } else {
            cronometroElemento.textContent = tiempoRestante;
            tiempoRestante--;
        }
    }, 10000);
}
starCronometro()
