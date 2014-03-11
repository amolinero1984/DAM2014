 window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems  = that.querySelectorAll(selector);

        return (elems.length === 1) ? elems[0]: elems;
};


var muestra = (function(e){
    "use strict"; //Para utilizar js de manera mas correcta

    //Formato fecha
    var fecha = /(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/\d{4}/;

    console.log(fecha.test("Naci en donosti el 05/04/1982"));
    console.log(fecha.test("Naci en donosti el 30/02/1982"));
    console.log(fecha.test("Naci en donosti el 99/99/1982"));
    console.log(fecha.test("Naci en donosti el 12/13/1982"));

    console.log("Naci en donosti el 05/04/1982".match(fecha));

    //Direccion email
    var email = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;
    console.log(email.test("alexander.molinero@gmail.com"));
    console.log(email.test("alexander.molinero@gmail.com.es"));
    console.log(email.test("a@a.com"));
    console.log(email.test(".molinero@gmail.com"));
})();