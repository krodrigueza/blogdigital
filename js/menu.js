jQuery('document').ready(function($){

    var menuBtm = $('.icon_menu'),
    menu = $('.menu ul');
    
    menuBtm.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');
        }
    });
    
});