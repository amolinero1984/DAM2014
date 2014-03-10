 window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems  = that.querySelectorAll(selector);

        return (elems.length === 1) ? elems[0]: elems;
};

var anade = (function(e){
    "use strict";

    window.onload = function(){

    };

    var lista = $('#lista'),
        lis = lista.children,
        count = lista.children.length;

    var mostrarTexto = function(e){
        console.log(this);
        console.log(e);
    };

    //lista.addEventListener('click',mostrarTexto); Delegamos el evento SOLO JQuery
    $('#lista').addEventListener('click',mostrarTexto);

    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].addEventListener('click', mostrarTexto); //Con parentesis lo ejecutaria al mismo tiempo
        lis[i].addEventListener('mouseover', mostrarTexto); //con el event se puede mirar que evento es
    }


    var anade = function(){
        var li = document.createElement('li');
        li.innerText = "Elemento " + (++count);

        lista.appendChild(li);
    };

    return anade;
})();
