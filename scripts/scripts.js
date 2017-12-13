
( function( $ ) {
    
    $( document ).ready( function() {
        $('.list__item').on('click', function() {
            $('.list').addClass('list--off-canvas');
            $('.navbar').addClass('navbar--on');
        });
        
        $('.back-button').on('click', function() {
            $('.list').removeClass('list--off-canvas');  
            $('.navbar').removeClass('navbar--on');
        });
        
        $('.info-trigger').colorbox({
            inline:true, 
            width:"80%", 
            transition:"fade"
        });
    });

} )( jQuery );


