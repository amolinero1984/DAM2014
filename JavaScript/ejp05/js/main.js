(function(){
    "use strict"; //Para utilizar js de manera mas correcta

    //Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);
    enlaces = document.querySelectorAll('a');
    console.log(enlaces.length);

    console.log(enlaces);

    //Dirección a la que enlaza el penúltimo enlace
    var enlace = enlaces[enlaces.length-2].href;
    console.log(enlace);

    //Numero de enlaces que enlazan a http://prueba
    var count = 0;
    for (var i=0;i<enlaces.length;i++){
        if(enlaces[i].href === "http://prueba/")
            count++;
    }
    console.log(count);

    enlaces = document.querySelectorAll('a[href$="http://prueba"]');
    console.log(enlaces.length);

    //Número de enlaces del tercer párrafo
    var parrafos = document.querySelectorAll('body > p'); //hijos directos
    if(parrafos.length >= 3){
        enlaces = parrafos[2].querySelectorAll('a');
        console.log(enlaces.length);
    }
})();