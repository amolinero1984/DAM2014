$(function(){
    'use strict';

    //3.8.1 SELECCIONES

    //Seleccionar todos los elementos div que poseen la clase "module".
    var $divs = $('div.module');
    console.log($divs);
    console.log($divs[0]);

    //Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList
    var $li =$('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);

    //Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var $input = $('[name="q"]');
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') + '"]');
    console.log($input);

    //Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    var $ocultos = $('hidden');
    console.log($ocultos);

    //Averiguar cuantas imágenes en la página poseen el atributo alt.
    var img = $('img[alt]');
    console.log(img);

    //Seleccionar todas las filas impares del cuerpo de la tabla.
    var $filas = $('tbody tr:odd').css('background-color','gray');
    console.log($filas);

     //3.8.2 RECORRER EL DOM

    //Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    $('img').each(function(idx, el) {
        console.log(el.alt);
        console.log(this.alt);
    });

    //Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    var $form = $('name').closest('form').addClass("formulario");

    //Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    var $current = $('#myList .current');
    $('#myList .current').removeClass('current').next().addClass('current');


    //Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    var $select = $('#specials select');
    console.log($select);
    $input = $select.closest('form').find("input[type=submit]");
    console.log($input);

    //Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos.
     $li = $('#slideshow li:first');
     $li.addClass("current");
     var $hermanos = $li.siblings().addClass("disabled");

    //3.8.3 RECORRER EL DOM

    //Añadir 5 nuevos ítems al final de la lista desordenada #myList.
    var start;
    var end;


    var $myList = $('#myList');
    var myItems = [];

    start = new Date();
    for (var i=0; i<5; i++) {
        myItems.push('<li>item ' + i + '</li>');
    }
    end = new Date();
    console.log(end-start);

    $myList.append(myItems.join(''));

    //Remover los ítems impares de la lista.
    $li = $('#myList li:even').remove();

    //Añadir otro elemento h2 y otro párrafo al último div.module.
    var $divModule = $(".module:last");
    myItems = [];
    myItems.push('<h2>Soy H2</h2>');
    myItems.push('<p>Soy un parrafo</p>');
    $divModule.append(myItems.join(''));


    //Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".
    var $day = $('select[name=day]').append('<option value="wednesday">Wednesday</option>');
    var opt = new Option('Wednesday','wednesday');
    $('select[name=day]')[0].options.add(opt);

    //Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
    var $divModul = $("div.module").last();
    var $new = $('</div>',{
        'class':'module',
        'id' : 'myModule'
    });
    //$new.append($('img[alt]').first.clone()).insertAfter($divModul); --> Revisar
});