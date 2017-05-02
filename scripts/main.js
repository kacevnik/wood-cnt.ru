$(document).ready(function(){

    $("input, textarea").placeholder();

    $("input, textarea").focus(function(){
        $(this).attr('placeholder', '');
    });

    $("input, textarea").focusout(function(){
        $(this).attr('placeholder', $(this).attr('data'));
    });

    $(".phone").mask("+7 (999) 999-99-99");

    $(".header_back").fancybox({
        padding     : 0,
        height: 'auto',
        maxWidth    : 320,
        fitToView   : false,
        width       : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });

    var spans = $('.contant_item_shadow a span');

    $.each(spans, function(index, value){
        $(value).css({'margin-top':(180 - $(value).height()) / 2 + 'px'});
    });

    $('.contant_item_shadow a').hover(function(){
        $(this).css({'background':'rgba(0, 0, 0, 0)'});
        $(this).parent().css({'background-size':'110px'});
        $(this).parent().stop();
        $(this).find('span').hide();
        $(this).parent().animate({
            'background-size': '120%',
            'background-position-x': '-15px',
            'background-position-y': '-15px'
        }, 400);
        
    }, function(){
        $(this).css({'background':'rgba(0, 0, 0, 0.5)'});
        $(this).find('span').show();
        $(this).parent().stop();
        $(this).parent().animate({
            'background-size': '110%',
            'background-position-x': '0',
            'background-position-y': '0'
        }, 400);
    });

    $('form').ajaxForm(function() { 
        alert("Thank you for your comment!"); 
    }); 

});