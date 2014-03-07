var APP = APP || {};

APP.validarPalindromo = (function(){
	"use strict"; //Para utilizar js de manera mas correcta

	var validarPalindromo = function(palabra){
        var letras = palabra.split("");
        var letrasReves = palabra.split("").reverse();

        var iguales = true;
        for(var i = 0; i < letras.length;i++) {
            if(letras[i] != letrasReves[i]) {
                iguales = false;
            }
        }
        return iguales;
	};

	return validarPalindromo;
})();

console.log(APP.validarPalindromo("sdfsfs"));
console.log(APP.validarPalindromo("ABBA"));