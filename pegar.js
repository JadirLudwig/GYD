var capturando = "";
var yt = "youtube-dl -citv ";
var shell = require('shelljs');

function capturar () {
    capturando = document.getElementById('valor').value;
    shell.exec(yt+capturando, { async:true});
}