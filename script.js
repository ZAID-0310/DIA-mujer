function abrirCarta(){

let carta = document.getElementById("carta");

carta.classList.toggle("abierta");

/* activar scroll cuando se abre */

document.body.classList.toggle("carta-abierta");

/* mostrar fotos y video */

let media = document.querySelectorAll(".media");

media.forEach(item => {

item.classList.toggle("visible");

/* si es video lo reproducimos */

if(item.tagName === "VIDEO"){
item.play();
}

});

}

/* iniciar musica desde un tiempo */

window.addEventListener("load", function(){

let musica = document.getElementById("musica");

/* tiempo en segundos */

musica.currentTime = 29;

});