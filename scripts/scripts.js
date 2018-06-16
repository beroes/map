
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
        
        document.querySelector('.info-trigger').addEventListener('click', function() {
            document.querySelector('.overlay').classList.add('overlay--active');
        });
    
        document.querySelector('.overlay').addEventListener('click', function() {
            this.classList.remove('overlay--active');
        });
    
        document.querySelector('.info-window .content').addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

} )( jQuery );


