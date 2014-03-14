$(function(){
    var $modules = $('div.module').hide();
    var $nav = $('<ul>').addClass("tabs");
    var lis = [];

    $modules.each(function(){
            var $module = $(this);
            var $title = $module.find('h2').text();

            var $li = $('<li/>',{'text': $title});
            $li.data('target',$module);
            console.log($li);

            lis.push($li.get(0));
    });

    $nav.append(lis).insertBefore($modules.eq(0));

    $(document).on('click','.tabs li', function(e){
      var $this = $(this);

      $this.addClass('current').siblings().removeClass('current');
      $this.data('target').show().siblings('.module').hide(); //devuelve el div entero
    });

    $modules.eq(0).show();
    $nav.find('li').filter(':first').addClass('current');

});