var APP = APP || {};

var muestra = (function(e){
    "use strict"; //Para utilizar js de manera mas correcta

    var muestra = function(){
        document.getElementById("spanMuestra").className = "adicional visible";
        document.getElementById("linkOculto").className = "enlace oculto";
    };

    return muestra;
})();


