$(document).ready(function(){

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


});