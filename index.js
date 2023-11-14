function starboton(){
    alert("Bienvenido")
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