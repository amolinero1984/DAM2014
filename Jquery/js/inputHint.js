$(function(){
    var $input = $('[name="q"]');
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') + '"]');
    //$(".input_text").val($label[0].textContent);
    $(".input_text").val($label.text());
    $(".input_text").addClass('hint');
    $label.hide();
    $hint = $label.text();

    $('input').on(
    'focus',
        function(eventObject) {
            $(this).val("");
            //this.value = '';
            $(this).removeClass("hint");
        }
    );

    $('input').on(
    'blur',
        function(eventObject) {
            if ($(this).val().length === 0){
                $(this).val($label.text());
                $(".input_text").addClass('hint');
            }
        }
    );
});