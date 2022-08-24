"use strict"

var horas = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; //milésimos que valem 1 segundo.
var cron; 

function start () {
    cron = setInterval(timer, tempo);
}

function pause () {
    clearInterval(cron);
}

function clean () {
    clearInterval(cron);
    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById("contador").innerText = "00.00.00"

}

function timer () {
    segundos++;

    if (segundos == 60) {
        segundos = 0;
        minutos++; 
    }

    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    var format = (horas > 10 ? "0" + horas : horas) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
     document.getElementById("contador").innerText = format;
}
