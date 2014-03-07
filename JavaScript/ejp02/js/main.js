var APP = APP || {};

APP.validarDNI = (function(){
	"use strict"; //Para utilizar js de manera mas correcta

	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	//Este array no se puede modificar desde fuera gracias a la funcion anonima

	var validarLongitud = function(dni) {
		return dni && dni.length == 9;
	};

	var validarNumero = function(dni){
		var num = dni && parseInt(dni); //parseInt coje solo la parte numerica
		return !isNaN(num) && num >= 0 && num <= 99999999;
	};

	var validarLetra = function(dni){
		var letra = dni.charAt(dni.length -1);
		var num = parseInt(dni);

		var index = num % 23;

		return letras[index] == letra;
	};

	var validarDNI = function(dni) {
		return validarLongitud(dni) && validarNumero(dni) && validarLetra(dni);
	};

	return validarDNI;
})();

console.log(APP.validarDNI("78928576M"));
console.log(APP.validarDNI("78928576X"));
