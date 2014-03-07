var APP = APP || {};

APP.validarLetra = (function(){
	"use strict"; //Para utilizar js de manera mas correcta


	var esMayuscula = function(palabra) {
		return palabra && palabra == palabra.toUpperCase();
	};

	var esMinuscula = function(palabra) {
		return palabra && palabra == palabra.toLowerCase();
	};

	var mezclaAmbas = function(palabra) {

		return palabra && !(palabra ==  palabra.toLowerCase()) && !( palabra == palabra.toUpperCase());
	};

	var validarLetra = function(palabra) {
		if (esMayuscula(palabra)) return "La palabra está escrita en mayusculas";
		else if (esMinuscula(palabra)) return "La palabra está escrita en minúsculas";
		else if (mezclaAmbas(palabra)) return "La palabra está escrita en mayúsculas y minúsculas";
	};

	return validarLetra;
})();

console.log(APP.validarLetra("HOLA"));
console.log(APP.validarLetra("hola"));
console.log(APP.validarLetra("HoLa"));
console.log(APP.validarLetra(""));


