let imagenes = ["img/delegado1.jpg", "img/delegado2.jpg", "img/delegado3.jpg"];

let tiempoSlot1=100;
let tiempoSlot2=200;
let tiempoSlot3=300;
let manejarSlot1;
let manejarSlot2;
let manejarSlot3;

function cambiarImagen() {
    let aleatorio = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot1").src = imagenes[aleatorio];
    console.log(aleatorio);

    let aleatorio2 = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot2").src = imagenes[aleatorio2];
    console.log(aleatorio2);

    let aleatorio3 = parseInt(Math.random() * imagenes.length);
    document.getElementById("slot3").src = imagenes[aleatorio3];
    console.log(aleatorio3);
}

function tirada() {
    manejarSlot1 = setInterval(cambiarImagen, tiempoSlot1);
    setInterval(pararSlot1, 3000);

    manejarSlot2 = setInterval(cambiarImagen, tiempoSlot2);
    setInterval(pararSlot2, 3000);

    manejarSlot3 = setInterval(cambiarImagen, tiempoSlot3);
    setInterval(pararSlot3, 3000);
}

function reducirtiempo(){
    tiempoSlot1 += 500;
    clearInterval(manejarSlot1);
    manejarSlot1 = setInterval(cambiarImagen, tiempoSlot1);
    setTimeout(pararSlot1, 2000);

    tiempoSlot2 += 500;
    clearInterval(manejarSlot2);
    manejarSlot2 = setInterval(cambiarImagen, tiempoSlot2);
    setTimeout(pararSlot2, 2000);

    tiempoSlot3 += 500;
    clearInterval(manejarSlot3);
    manejarSlot3 = setInterval(cambiarImagen, tiempoSlot3);
    setTimeout(pararSlot3, 2000);
}

function pararSlot1() {
    clearInterval(manejarSlot1);
}
function pararSlot2() {
    clearInterval(manejarSlot2);
}
function pararSlot3() {
    clearInterval(manejarSlot3);
}

tirada();

setInterval(cambiarImagen, 500);
