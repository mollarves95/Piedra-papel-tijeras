const seccionBatalla = document.getElementById('cont-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-jugador');
const imgAtaquePc = document.getElementById('img-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');


let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

const imagenes = [
    {
        name: "Piedra",
        url: "img/piedra.png"
    },
    {
        name: "Papel",
        url: "img/papel.png"
    },
    {
        name: "Tijeras",
        url: "img/tijeras.png"
    }
];

function iniciar(){
    seccionBatalla.style.display = 'none';

};

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
});

function opPc(){
    let aleatorio = numAleatorio();

    if(aleatorio == 0){
        opcionPc = "Piedra";
    }else if(aleatorio == 1){
        opcionPc = "Papel";
    }else if(aleatorio == 2){
        opcionPc = "Tijeras";
    }

    batalla();
};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "¡Empate!";
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.innerHTML = "¡Gana el Jugador!";
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "¡Gana el Jugador!";
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "¡Gana el Jugador!";
    }else{
        msjBatalla.innerHTML = "¡Gana la Máquina!"; 
    };

    addImagenes(); 
};

function numAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            let inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };

        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            let inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
    };

    seccionBatalla.style.display = 'flex';
}

window.addEventListener('load', iniciar);